'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const imageStyle = {
  width: '100%',
  height: 'auto',
};
const Discover = (props) => {
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
      $("#carouselDiscoverMobile").owlCarousel({
        loop: false,
        margin: 15,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    });
    });
  return (
    <section
  id="block-discover"
  className="section-block position-relative bg-white"
>
  <div className="container position-relative mob-px-0">
    {/* head-desc */}
    <div className="col-12 mob-px-3">
      <div className="head-desc text-center position-relative">
        <h3 className="head-title mb-3 text-black font-flair">
          {data.heading}
        </h3>
        <p className="mb-0">
          {data.description}
        </p>
      </div>
    </div>
   
    <div id="carouselDiscover" className="web-d-block mob-d-none">
      {/* item */}
      <div className="item">
        <div className="post-slide item-widget">
          <div className="row box-shadow mx-0">
            {dt.map((post,key)=>{
              return<>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="grid">
                <figure className="fig-overlay">
                  {/* <img
                    src={}
                    alt=""
                    title=""
                    className="img-zoom w-100"
                  /> */}
                  <Image
                  src={post.images.vertical}
                  alt={post.images.alt}
                  title={post.images.title}
                  className="img-zoom w-100"
                  width={550}
                  height={859}
                  style={imageStyle}
                   />
                  <figcaption className="fig-caption">
                    <h2 className="font-flair text-white">{post.heading}</h2>
                    <p className="text-white ibm-font-18">
                    {post.description}
                    </p>
                    <Link href={post.link.href} className="text-white underline-0 read-more" target={post.link.target} title={post.link.title}>
                    {post.link.text} <i className="la la-long-arrow-right" />
                    </Link>
                  </figcaption>
                  <span className="icon-fav -trans">
                    <Link href="" className="d-inline-block text-yellow">
                      <img src="images/favourite_yellow.svg" alt="" title="" />
                    </Link>
                  </span>
                  <span className="icon-map -trans">
                    <Image
                      src={post.images.hover}
                      alt={post.images.alt}
                      title={post.images.title}
                      width={160}
                      height={298}
                    />
                  </span>
                  <h5 className="mb-0 btm-txt w-100 -trans">
                    <Link
                      href=""
                      className="d-block link-btn underline-0 ibm-font-18 text-white"
                    >
                      {post.district}
                    </Link>
                  </h5>
                </figure>
              </div>
            </div>
            </>
            })}
           
          </div>
        </div>        
      </div>
      {/* item end */}
    </div>
    {/* carouselDiscover end */}
    {/* carouselDiscover */}
    <div
      id="carouselDiscoverMobile"
      className="web-d-none mob-d-block owl-carousel owl-theme carousel-mirror"
    >
      {/* item */}
      {dt.map((post,key)=>{
              return<>
      <div className="item">
        <div className="post-slide item-widget">
          <div className="col-12 mob-px-0">
            <figure className="fig-overlay m-0">             
               <Image
                  src={post.images.vertical}
                  alt={post.images.alt}
                  title={post.images.title}
                  className="img-zoom w-100"
                  width={550}
                  height={859}
                  style={imageStyle}
                   />
              <figcaption className="fig-caption">
                <h2 className="font-flair text-white">{post.heading}</h2>
                <p className="text-white ibm-font-18">
                {post.description}
                </p>
                <Link href={post.link.href} className="text-white underline-0 read-more" target={post.link.target} title={post.link.title}>
                {post.link.text}  <i className="la la-long-arrow-right" />
                </Link>
              </figcaption>
              <span className="icon-fav -trans">
                <Link href="" className="d-inline-block text-yellow">
                  <img src="images/favourite_yellow.svg" alt="" title="" />
                </Link>
              </span>
              <span className="icon-map -trans">
              <Image
                      src={post.images.hover}
                      alt={post.images.alt}
                      title={post.images.title}
                      width={160}
                      height={298}
                    />
              </span>
              <h5 className="mb-0 btm-txt w-100 -trans">
                <Link
                  href=""
                  className="d-block link-btn underline-0 ibm-font-18 text-white"
                >
                  {post.district}
                </Link>
              </h5>
            </figure>
          </div>
        </div>
      </div>
      </>
      })}
      {/* item end */}
      {/* item */}
      {/* <div className="item">
        <div className="post-slide item-widget">
          <div className="col-12 mob-px-0">
            <figure className="fig-overlay m-0">
              <img
                src="images/discover2.jpg"
                alt=""
                title=""
                className="img-zoom w-100"
              />
              <figcaption className="fig-caption">
                <h2 className="font-flair text-white">Kovalam</h2>
                <p className="text-white ibm-font-18">
                  A saga of Forts, Folklores and Festivals
                </p>
                <a href="#" className="text-white underline-0 read-more">
                  more <i className="la la-long-arrow-right" />
                </a>
              </figcaption>
              <span className="icon-fav -trans">
                <a href="" className="d-inline-block text-yellow">
                  <img src="images/favourite_yellow.svg" alt="" title="" />
                </a>
              </span>
              <span className="icon-map -trans">
                <img src="images/map.png" alt="" title="" />
              </span>
              <h5 className="mb-0 btm-txt w-100 -trans">
                <a
                  href=""
                  className="d-block link-btn underline-0 ibm-font-18 text-white"
                >
                  Ernakulam District
                </a>
              </h5>
            </figure>
          </div>
        </div>
      </div> */}
      {/* item end */}
    </div>
    {/* carouselDiscover end */}
    <div className="btn-block custom-btn-block">
      <Link href={data.link.href} target={data.link.target} title={data.link.title} className="text-black underline-0 read-more">
      {data.link.text} <i className="la la-long-arrow-right" />
      </Link>
    </div>
  </div>
</section>

  )
}

export default Discover