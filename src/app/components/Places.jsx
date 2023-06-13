'use client'
import {useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';
import Link from 'next/link';

const places = (props) => {
 const {data} =props;
 const dt=data.items;
  useEffect(() => {
    if (typeof window !== 'undefined') {
        // Accessing the window object is safe here
        // Perform any browser-specific operations
        window.scrollTo(0, 0);
    }
}, []);

$(function () {
  $("#regCarousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1200,
    autoplayTimeout: 7000,
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
    <section id="block-reg" className="reg-slide-block pt-5 mob-pt-0">
  <div className="container mob-px-0">
    <div id="regCarousel" className="owl-carousel owl-theme">
      {/* item */}
      {dt.map((post,key)=>{
        return(
          <div className="item">
          <div className="post-slide item-widget col-12">
            <div className="row">
              <picture>
                <source
                  srcSet={post.images.square}
                  media="(max-width: 767px)"
                  className="w-100"
                />
                <Image 
                 className="d-block w-100"
                 src={post.images.vertical}
                 alt={post.images.alt}
                 title={post.images.title}
                 height={542}
                 width={1116}
                />
                {/* <img
                  className="d-block w-100"
                  src="images/gallery-1.jpg"
                  alt="First slide"
                  title=""
                /> */}
              </picture>
              <div className="col-lg-6 col-12 h-100">
                <div className="desc-default">
                  <h3 className="text-black head-sub font-flair">
                    {post.heading}                   
                  </h3>
                  <p className="text-dark ibm-font-18 font-light">
                    {post.description}
                  </p>
                  <Link href={post.link.href} target={post.link.target} title={post.link.title} className="text-dark underline-0 read-more">
                  {post.link.text} <i className="la la-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      })}
     
    </div>
  </div>
</section>

  )
}

export default places