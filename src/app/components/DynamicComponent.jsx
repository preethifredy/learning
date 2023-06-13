'use client'
import React, { useEffect, useState } from 'react';

const DynamicComponent = ({ componentName }) => {


  const [Component, setComponent] = useState(null);

  // const importComponent = async (componentName1) => {
     
  //   const component = await import(`../components/${componentName1}`);
    
  //   setComponent(component.default);
    
     
  // };
  // useEffect(() => {
  //   console.log(componentName);
  //   const importComponent = async () => {
      
  //     const component = await import(`${componentName}.jsx`);
  //     setComponent(component.default);
  //   };

  //   importComponent();
  // }, [componentName]);

  // useEffect(()=>{
  //   importComponent(componentName);
  // },[componentName])

  useEffect(() => {
    const importComponent = async (componentName1) => {
      const component = await import(`../components/${componentName1}`);
      setComponent(component.default);
      alert(componentName1);
    };

    importComponent(componentName);
  }, [componentName]);

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component  />;
};

export default DynamicComponent;
