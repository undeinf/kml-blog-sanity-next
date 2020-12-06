import {useState} from 'react';
// import Head from 'next/head'
import { Button, Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
// import CardListItem from 'components/CardListItem';
// import CardItem from 'components/CardItem';
import FilteringMenu from 'components/FilteringMenu'
// import { useGetBlogs } from 'actions';
import { getAllBlogs } from 'lib/api';
import { useGetBlogsPages } from 'actions/pagination';

export default function Home({blogs}) {
  const [filter, setFilter] = useState({
    view:{list:0},
    date:{asc: 0}
  })

  // loadmore is to load more data
  // isLoading flag to check loading state
  // isReachingEnd flag to check if more are thr or not
  const {pages, isLoadingMore, isReachingEnd, loadMore} = useGetBlogsPages({blogs, filter});

  // const {data:blogs, error} = useGetBlogs(initialData);

  // if(!blogs){
  //   return "Loading..."
  // }

  // if(blogs){
  //   console.log('blogs', blogs)
  // }

  // if(error){
  //   console.log('error', error)
  // }

  return (
  <PageLayout>
    {/* <AuthorIntro/> */}
    <FilteringMenu 
      filter={filter}
      onChange={(option, value) => setFilter({...filter, [option]: value})}/>
    <hr/>
    <Row className="mb-5">
      {pages}
      
      {/* <div className="d-flex flex-wrap"> */}
      {/* {blogs && blogs.map((item, index) => (
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
        
    ))} */}
    {/* </div> */}
    </Row>
    <Col>
      <Button 
        onClick={loadMore}
        disabled={isReachingEnd || isLoadingMore}
        size="lg" 
        variant="outline-secondary">
        {isLoadingMore ? 'Processing...' : isReachingEnd ? 'No More Blogs' : 'Load More'}
      </Button>
      </Col>
</PageLayout>
  )
}

// // init before component render
export async function getStaticProps(){
 return {
   props: {
     blogs: await getAllBlogs({offset:0, date:'desc'})
   }
 }
}
