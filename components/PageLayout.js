import { Container } from "react-bootstrap";
import Head from 'next/head';
import Navbar from "./Navbar";




export default function PageLayout({children, className}){
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <Container>
            <Navbar/>

            <div className={`page-wrapper ${className}`}>
                {children}
            </div>

            <footer className="page-footer">
                <div>
                    &copy; Kamal
                </div>
            </footer>
        </Container>
        </>
    )
}