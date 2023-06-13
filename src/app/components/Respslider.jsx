'use client'
import React, { useEffect } from 'react';
import { Container, Col ,Row} from "./Bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';
import Link from 'next/link';


// import dynamic from "next/dynamic"
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });


const Respslider = (props) => {
    const { data } = props;
    //console.log(data);
    const dt = data.items;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Accessing the window object is safe here
            // Perform any browser-specific operations
            window.scrollTo(0, 0);
        }
    }, []);

    $(function () {
        // Owl Carousel multiple id
        var owl = $("#essentialCarousel");
        owl.owlCarousel({
            items: 1,
            margin: 0,
            loop: false,
            nav: true,
            dots: true,
            autoplay: true,
            smartSpeed: 1200,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });
    });


    return (
        <>
        
           
                <section id="block-essential" className="section-block reg-slide-block">
                    {/* <div className="container">
                        <div className="col-12"> */}
                    <Container >
                        <Col>
                            <div className="head-desc text-center position-relative">
                                <h3 className="head-title mb-3 text-black font-flair">{data.heading}</h3>
                                <p className="mb-0">
                                    {data.description}
                                </p>
                            </div>
                        </Col>
                        {/* </div> */}
                        <div id="essentialCarousel" className="owl-carousel owl-theme">
                            {dt.map((post,key) => {
                                return  <div className="item" key={key}>
                                <div className="post-slide item-widget col-12">
                                    <Row>
                                    {/* <div className="row"> */}
                                        <picture>
                                            <source
                                                srcSet={post.images.square}
                                                media="(max-width: 767px)"
                                                className="w-100"
                                            />                                            
                                            <Image className="d-block w-100" src={post.images.vertical} width={1250} height={597} alt={post.images.alt} title={post.images.title}/>
                                        </picture>
                                        <div className="col-lg-6 col-12 col-overlay position-absolute h-100">
                                            <div className="desc-esntl">
                                                <span className="link-holder d-inline-block mb-1">
                                                    <Link  href="#"
                                                        className="font-16 font-light underline-0 text-yellow text-uppercase" >                                                    
                                                        Latest Update
                                                    </Link>
                                                </span>
                                                <h3 className="text-white head-sub font-flair">
                                                   {post.heading}
                                                </h3>
                                                <p className="text-white ibm-font-18 font-light">
                                                {post.description}
                                                </p>
                                                <Link href={post.link.href} className="text-yellow underline-0 read-more" target={post.link.target}  title={post.link.title}>
                                                   {post.link.text}
                                                    <i className="la la-long-arrow-right" />{" "}
                                                </Link>
                                            </div>
                                        </div>
                                       
                                    {/* </div> */}
                                    </Row>
                                </div>
                            </div>
                            })}                            
                        </div> 
                     </Container>
                    {/* </div> */}
                </section>


                {/* <OwlCarousel className='owl-theme'   >
                    {dt.map((post) => {
                        return <div >
                            <Image src={post.images.vertical} width={1250} height={597} />
                        </div>
                    })}

                </OwlCarousel> */}
            
        </>
    )
}

export default Respslider