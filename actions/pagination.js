import {useEffect} from 'react'
import {useSWRPages} from 'swr'
import {useGetBlogs} from 'actions'
import { Row, Col } from 'react-bootstrap';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';


export const useGetBlogsPages = ({blogs: initialData, filter}) => {
    useEffect(() => {
        window.__pagination__init = true;
    },[])

    return useSWRPages('index-page',({offset, withSWR}) => {
        
        if(typeof window !== 'undefined' && window.__pagination__init){
            initialData = null;
        }

        const {data: blogs} = withSWR(useGetBlogs({offset, filter},initialData));

        if(!blogs) { return ''}

        return blogs && blogs.map((item, index) => (
            filter.view.list ?
            <Col md="12">
              <CardListItem
                title={item.title} subtitle={item.subtitle}
                slug={item.slug}
                date={item.date}
                author={item.author}
                link={{
                  as: `/blogs/${item.slug}`,
                  href: `/blogs/[slug]`
                }}/>
            </Col>
            :
            <Col md="4" key={index} className="flex-grow-1">
              <CardItem title={item.title} subtitle={item.subtitle}
                slug={item.slug}
                coverImage={item.coverImage}
                date={item.date}
                author={item.author}
                link={{
                  as: `/blogs/${item.slug}`,
                  href: `/blogs/[slug]`
                }}/>
            </Col>
            
        ))
    },
    // here you will compte offset that will get into prev
    // SWR: data from withSWR
    // index: current page
    (SWR, index) => {
        if(SWR.data && SWR.data.length === 0){
            // reached end
            return null
        }
        return (index + 1) * 3 
    },
    [filter])
}