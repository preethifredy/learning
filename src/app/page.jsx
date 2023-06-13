
import React from 'react'
import Respslider from './components/Respslider';
import Memories from './components/Memories';
import Stories from './components/Stories';
import Discover from './components/Discover';
import Events from './components/Events';
import Places from './components/Places';
import Video from './components/Video';
import Link from 'next/link';


const assignLayouts = section => {
    let layout = section.layout; 
 
    if (layout === 2) {  
       return <Respslider data={section} key={section.heading} />       
    }
    else if (layout === 4) {  
      const dt = section.items[0];
      //console.log(dt)
      return (
        <>
        <section
          id="block-stories"
          className="section-block mob-pt-0 position-relative pb-0"
        >
          <div className="container">
            <div className="col-12">
              <div className="head-desc text-center position-relative">
                <h3 className="head-title mb-3 text-black font-flair">
                  {section.heading}
                </h3>
                <p className="mb-0">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
          <div id="carouselStories">
            <div className="post-slide item-widget">
              <div className="desc">
                <div className="container px-5 mob-px-3 text-center custom-wrap">
                  <h3 className="text-white head-sub font-flair border-bottom pb-3 mb-3">
                    {dt.heading}
                  </h3>
                  <p className="text-white ibm-font-18 font-light">
                    {dt.description}
                  </p>
                  <Link href={dt.link.href} className="text-light underline-0 read-more">
                  {dt.link.text} <i className="la la-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
      )
    }
    else if (layout === 5) {  
     return  <Memories data={section} key={section.heading}  />
    }
    else if (layout === 6) { 
    //  return <DynamicComponent componentName="Discover" data={section} key={section.heading}  />; 
      return  <Discover data={section} key={section.heading}  />
     }
    if (layout === 7) {   
      return  <Stories data={section} key={section.heading}  />
   }
   if (layout === 9) {   
    return  <Events data={section} key={section.heading}  />
  }
  if (layout === 10) {   
    return  <Places data={section} key={section.heading}  />
    }
    if (layout === 12) {   
      return  <Video data={section} key={section.heading}  />
    }

   
  }

const page = async () => {

    const data = await fetch(
        'http://202.88.244.195/keralatourism.org/mobileapi/web/ktapp2023/home',
        {
          cache: 'no-store'
            //  next:{
            //   revalidate:20,
            //  }
        }
      );
      const result = await data.json();
      const ret = result.sections;
    
  return (
    <>
    {ret && ret.map(item => (
                 assignLayouts(item)
             ))}
    </>
//    
  )
}

export default page


