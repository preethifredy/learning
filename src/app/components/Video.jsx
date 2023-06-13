'use client'
import React, { useEffect } from 'react';
import { Container, Col ,Row} from "./Bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';
import Link from 'next/link';
import MySVGComponent from './SvgImage'


const Video = (props) => {
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
        // Owl Carousel
        var owl = $("#socialCarousel, #carouselVideo");
        owl.owlCarousel({
            items: 1,
            margin: 0,
            loop: false,
            nav: true,
            dots: false,
            smartSpeed: 1200,
            autoplayTimeout: 7000,
        });
    });
    

  return (
    <div id="block-video" className="section-block">
  <div className="container position-relative">
    <div id="carouselVideo" className="owl-carousel owl-theme carousel-mirror">
        {dt.map((post,key)=>{
            return (
                <div className="item" key={key}>
                    <div className="post-slide item-widget video-widget col-12">
                    <div className="row">
                        {/* <img src="images/video-bg.jpg" alt="" /> */}
                        <Image
                        src={post.images.vertical}
                        alt={post.images.alt}
                        title={post.images.title}
                        height={542}
                        width={1116} />
                        <div className="play-btn posCenter">
                        <Link href="" className="btn-stroke">
                           
                        <MySVGComponent  />                        
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })}
     
    </div>
    <div className="btn-block custom-btn-block">
      <Link href={data.link.href} className="text-black underline-0 read-more">
      {data.link.text} <i className="la la-long-arrow-right" />
      </Link>
    </div>
  </div>
</div>

  )
}

export default Video