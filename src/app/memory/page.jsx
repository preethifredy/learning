
import React from 'react'
import Memories from '../components/Memories';


const assignLayouts = section => {
    let layout = section.layout; 
 
    if (layout === 5) {       
       
       return  <Memories data={section} key={section.heading}  />
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


