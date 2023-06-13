import React from 'react'

const page = async ({params}) => {
    const cst=params.slug;   
    let language=cst[0];
    const lng=['malayalam','hindi'];
    let cat='';

    const cst_length=cst.length;

    if (lng.includes(language)) { language; cat=cst[1]; } else {language='english'; cat=cst[0]; }

    console.log(language);

    const data = await fetch('http://202.88.244.195/keralatourism.org/webapi/v1/home/lang_test', {
     cache: "no-store",
      headers: {
        'language': language,        
      },
    });
  
    const result = await data.json();
   // console.log(result)

   

  return (
    <div>{result.content}</div>
  )
}

export default page
