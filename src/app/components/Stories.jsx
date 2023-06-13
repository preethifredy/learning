'use client'
import React, { useEffect,useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';
import Link from 'next/link';

const Stories = (props) => {
    const { data } = props;
   // console.log(data);
    const dt = data.items;
//console.log(dt);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Accessing the window object is safe here
            // Perform any browser-specific operations
            window.scrollTo(0, 0);
        }
    }, []);

    $(function () {
    $("#carouselKstories").owlCarousel({
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

     const [isOpen, setIsOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {    
         
        setIsOpen(true);
      //  alert(isOpen);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
       // alert(isOpen);
    };

  return (
    <>
    <section id="block-kerala-story" className="section-block position-relative">
  <div className="container">
    {/* head-desc */}
    <div className="col-12">
      <div className="head-desc text-center position-relative">
        <h3 className="head-title mb-3 text-black font-flair">
        {data.heading}
        </h3>
        <p className="mb-0">
        {data.description}
        </p>
      </div>
    </div>
    {/* head-desc end */}
  </div>
  <div id="carouselKstories" className="owl-carousel owl-theme carousel-mirror">
  {dt.map((post, i) => {
    return (
        <div key={i}>
            <div className="item">
    <div className="post-slide item-widget col-12 k-stories">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 pr-0 mob-pr-15">
          <picture>
            <source
              srcSet={post.images.square}
              media="(max-width: 767px)"
              className="w-100"
            />
             <Image
              src={post.images.vertical}
              alt={post.images.alt}
              title={post.images.title}
              className="d-block w-100"
              width={500}
              height={500}
            />
            {/* <img
              className="d-block w-100"
              src="images/storiesBg1.jpg"
              alt="First slide"
              title=""
            /> */}
          </picture>      
              
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 bg-light position-relative pl-0 mob-pl-15">
          <div className="desc mob-position-absolute position-relative">
            <div className="row">
              <div className="col-12">
                <Link
                  href=""
                  className="text-decoration-none small-text text-uppercase text-yellow mob-text-white ibm-semi-bold mob-bg-yellow mob-btn"                  >
                 {post.caption}
                </Link>
                <h3 className="head-sub font-flair mb-3">
                  <Link href="" className="underline-0 text-dark">
                  {post.heading}
                  </Link>
                </h3>
                <p className="text-black ibm-font-18 ibm-light">
                {post.description}
                </p>
                <div className="row pt-4 mob-pt-0 mob-bdr-top">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12 mob-d-none">
                    <Link href={post.link.href} title={post.link.title} target={post.link.target} className="text-black underline-0 read-more">
                      {post.link.text} <i className="la la-long-arrow-right" />
                    </Link>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-end mob-text-center">
                    {/* Button trigger modal */}
                    <button 
                     type="button"
                     className="border-0 bg-transparent py-0 text-black underline-0 read-more play-btn"
                     data-toggle="modal"
                      data-target="#story-modal1"
                     onClick={openModal}>
                        <i className="la la-play" /> play video
                    </button>
                    {/* <button
                      type="button"
                      className="border-0 bg-transparent py-0 text-black underline-0 read-more play-btn"
                      data-toggle="modal"
                      data-target="#story-modal1"
                      onClick={openModal}
                    >
                      <i className="la la-play" /> play video
                    </button> */}
                    {/* Modal */}
                    {isOpen && (<div
                       className={`modal top fade modal-story"
                       id="story-modal1"
                       tabIndex={-1}
                       aria-labelledby="story-modal1-label"
                       aria-hidden="true"
                       data-backdrop="false"
                       data-keyboard="true"
                     `}>    
          <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="story-modal1-label"
                            >
                              Palakkayam Thattu
                            </h5>                            
                            <button
                              type="button"
                              onClick={closeModal}
                              className="btn-close"
                              data-dismiss="modal"
                              aria-label="Close"                              
                            />
                          </div>
                          <div className="modal-body modal-video">
                            <iframe
                              height={340}
                              src="https://www.youtube.com/embed/RkWfrexaD3s"
                              title="YouTube video player"
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-page bg-grey-light w-100">
            <div className="profile-header mb-0">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-12">
                    <div className="profile-image float-md-right">
                    <Image
                        src={post.author.image}
                        alt={post.author.alt}
                        title={post.author.title}                       
                        width={180}
                        height={180}
                        />
                      {/* <img src="images/avatarBg.png" alt="" /> */}
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-9 col-12">
                    <div className="blogger-text">
                      <h4 className="ibm-font-22 ibm-regular text-black">
                        <strong>{post.author.name}</strong>
                      </h4>
                      <p className="ibm-font-18 ibm-light text-black mb-0">
                      {post.author.profileTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
       
    )
    })
  }


    
  </div>
  <div className="btn-block">
    <Link href={data.link.href} title={data.link.title} className="text-black underline-0 read-more">
      {data.link.text} <i className="la la-long-arrow-right" />
    </Link>
  </div>
</section>

    </>
    
  )

  
}

export default Stories