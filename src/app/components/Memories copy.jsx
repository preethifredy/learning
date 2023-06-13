'use client'
import React, { useEffect ,useState} from 'react';
import { Container, Col, Row } from "./Bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Link from "next/link";
import Image from "next/image";

const Memories = (props) => {
    const { data } = props;
    //console.log(data);
    const dt = data.items;
    const item_count=dt.length;
   // let i=1;
    let start=true;
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Accessing the window object is safe here
            // Perform any browser-specific operations
            window.scrollTo(0, 0);
        }
    }, []);

    $(function () {
        $("#carouselMemories").owlCarousel({
            loop: false,
            margin: 0,
            smartSpeed: 1200,
            autoplayTimeout: 10000,
            responsiveClass: true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 1,
                    nav: false,
                    margin: 0,
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: false,
                    margin: 0,
                },
            },
        });
    });
    const [length, setLength] = useState(1);

  const loadmore = () => {
    setLength((prevLength) => prevLength + 1);
  };

  
   const divs = Array.from(dt).map((post, i) => {
   // const divs = Array.from(dt).map((post, i) => {
        i *= 3;
        return (
          <div key={i}>
            {/* <div>{i + 1}</div>
            <div>{i + 2}</div>
            <div>{i + 3}</div> */}
          {i<item_count-1 && <div
                className={`post-slide item-widget col-12 memories-widget ${i%3==0 || i===item_count-1 ? 'widget-last' : ''}   mb-5 mob-mb-2`}
            >
                <Row>
                <Col lg={4} md={6} sm={12} mob-pb={5}>
                    <div className="desc px-5">
                    <h3 className="head-title-sub flair-regular mb-3 text-black font-flair">
                        {post.heading}
                    </h3>
                    <p className="ibm-light ibm-font-26 text-black">
                        {post.description}
                    </p>
                    <Link
                        href={post.link.href}
                        className="text-black underline-0 read-more"
                        title={post.link.title}
                    >
                        {post.link.text} <i className="la la-long-arrow-right" />
                    </Link>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12} col={12}>
                    <div className="img-block">
                    <Image
                        src={post.images.square}
                        alt={post.images.alt}
                        title={post.images.title}
                        className="w-100"
                        width={500}
                        height={500}
                    />
                    </div>
                </Col>
                </Row>
            </div>
          }
          {i+1<item_count-1 && <div
                className={`post-slide item-widget col-12 memories-widget ${i+2 || i+1===item_count-1 ? 'widget-last' : ''}   mb-5 mob-mb-2`}
            >
                <Row>
                <Col lg={4} md={6} sm={12} mob-pb={5}>
                    <div className="desc px-5">
                    <h3 className="head-title-sub flair-regular mb-3 text-black font-flair">
                        {post.heading}
                    </h3>
                    <p className="ibm-light ibm-font-26 text-black">
                        {post.description}
                    </p>
                    <Link
                        href={post.link.href}
                        className="text-black underline-0 read-more"
                        title={post.link.title}
                    >
                        {post.link.text} <i className="la la-long-arrow-right" />
                    </Link>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12} col={12}>
                    <div className="img-block">
                    <Image
                        src={post.images.square}
                        alt={post.images.alt}
                        title={post.images.title}
                        className="w-100"
                        width={500}
                        height={500}
                    />
                    </div>
                </Col>
                </Row>
            </div>
          }
          {i+2<item_count-1 && <div
                className={`post-slide item-widget col-12 memories-widget ${i+2 || i+2===item_count-1 ? 'widget-last' : ''}   mb-5 mob-mb-2`}
            >
                <Row>
                <Col lg={4} md={6} sm={12} mob-pb={5}>
                    <div className="desc px-5">
                    <h3 className="head-title-sub flair-regular mb-3 text-black font-flair">
                        {post.heading}
                    </h3>
                    <p className="ibm-light ibm-font-26 text-black">
                        {post.description}
                    </p>
                    <Link
                        href={post.link.href}
                        className="text-black underline-0 read-more"
                        title={post.link.title}
                    >
                        {post.link.text} <i className="la la-long-arrow-right" />
                    </Link>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12} col={12}>
                    <div className="img-block">
                    <Image
                        src={post.images.square}
                        alt={post.images.alt}
                        title={post.images.title}
                        className="w-100"
                        width={500}
                        height={500}
                    />
                    </div>
                </Col>
                </Row>
            </div>
          }
            </div>
        );
      });
     
    return (
        <>
            <section
                id="block-momories"
                className="section-block position-relative bg-light"
            >
                <Container>
               
                    <Col>
                 
                        <div className="head-desc text-center position-relative">
                            <h3 className="head-title mb-3 text-black font-flair">
                            {data.heading}
                            </h3>
                            <p className="mb-0">
                            {data.description}
                            </p>
                        </div>
                   
                    </Col>
                    
                </Container>
                <div id="carouselMemories" className="owl-carousel owl-theme carousel-mirror">
                
                 {divs}
                <input type="button" onClick={loadmore} value="Load More" />
              
             
                   
                </div>
                <div className="btn-block">
                    <a href="#" className="text-black underline-0 read-more">
                        explore <i className="la la-long-arrow-right" />
                    </a>
                </div>
            </section>

        </>
    )
}

export default Memories