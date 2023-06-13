'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Events = (props) => {
    const {data}=props;
    const dt=data.items;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Accessing the window object is safe here
            // Perform any browser-specific operations
            window.scrollTo(0, 0);
        }
    }, []);

    $(function () {
        $("#carouselEvents").owlCarousel({
            loop: false,
            margin: 0,
            smartSpeed: 1200,
            autoplayTimeout: 10000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 2,
                    nav: false,
                    margin: 15,
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 20,
                },
            },
        });
    })

  return (
    <section id="block-events" className="section-block mob-pt-0">
  <div className="container position-relative mob-px-0">
    {/* head-desc */}
    <div className="col-12 mob-px-3">
      <div className="head-desc text-center position-relative">
        <h3 className="head-title mb-3 text-black font-flair">{data.heading}</h3>
        <p className="mb-0">
          {data.description}
        </p>
      </div>
    </div>
    {/* head-desc end */}
    <div id="carouselEvents" className="owl-carousel owl-theme carousel-mirror">
      {/* item */}
      {dt.map((post,key)=>{
        return <>
            <div className="items" key={key}>
        <div className="post-slide item-widget">
          <figure className="fig-overlay position-relative m-0">
            <Image 
            src={post.images.vertical} 
            alt={post.images.alt} 
            title={post.images.title}
            className="w-100"
            width={400}
            height={625}
            />
            <figcaption className="fig-caption">
              <h2 className="font-flair text-white">{post.heading}</h2>
              <p className="text-white ibm-font-18">{post.venue}</p>
              <Link href={post.link.href} title={post.link.title} target={post.link.target} className="text-white underline-0 read-more">
              {post.link.text} <i className="la la-long-arrow-right" />
              </Link>
            </figcaption>
            
            <div className="top-txt w-100">
              <div className="card-horizontal">
                <div className="digit-wrapper position-relative">
                  <span>
                    <b className="text-yellow ibm-font-40 ibm-semi-bold">{post.conductingDate}</b>
                    <small className="text-white d-block ibm-font-18">
                    {post.conductingMonth}
                    </small>
                  </span>
                </div>
                <div className="card-body p-4">
                  <h4 className="mb-0 pt-2 card-title text-white">{post.district}</h4>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
      </>
      })}     
     
    </div>
    <div className="btn-block custom-btn-block">
      <a href="#" className="text-black underline-0 read-more">
        explore <i className="la la-long-arrow-right" />
      </a>
    </div>
  </div>
</section>

  )
}

export default Events