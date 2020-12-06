import {useEffect, useState} from 'react'
import PageLayout from "components/PageLayout";
import {useRouter} from 'next/router'
import { getAllSlugData, getAllBlogs, urlFor } from 'lib/api';
import { Col, Row } from 'react-bootstrap';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import moment from 'moment';

const SlugPage = ({blog}) => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        console.log('router', router.query.slug, blog);
    },[router.query.slug])

    useEffect(() => {
        console.log('scrolling');
        window.addEventListener("scroll", scrollProgress);
        return () => {
            window.removeEventListener("scroll", scrollProgress);
            console.log('stop scrolling');
        }
    }, [])

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
    
        console.log(scrolled);
    
        setScrolled(scrolled);
      };

    // styles
    const progressContainerStyle = {
        background: "rgba(0,123,255,0.15)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        height: "5px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 99
      };
  
      const progressBarStyle = {
        height: "5px",
        background: "rgba(0,123,255,0.5)",
        width: scrolled
      };


    return(
        <PageLayout className="blog-detail-page">
            <div className="progress-container" style={progressContainerStyle}>
                <div className="progress-bar" style={progressBarStyle} />
            </div>

  <Row className="content">
    <Col md={{ span: 10, offset: 1 }}>
        {blog &&
        <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={moment(blog.date).format('LLL')}/>
        }
        <hr/>
        {blog && blog.content && 
            <BlogContent content={blog.content}/>
        }
      {/* Blog Content Here */}
      {/* It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). */}
    </Col>
  </Row>
    
</PageLayout>
    )
}

export async function getStaticProps(ctx) {
    const blog = await getAllSlugData(ctx.params.slug);
    return {props:{blog}};
}

export async function getStaticPaths(){
    const blogs = await getAllBlogs();
    return{
        paths:blogs?.map(d => ({params: {slug: d.slug}})),
        fallback: true
    }
}


export default SlugPage;