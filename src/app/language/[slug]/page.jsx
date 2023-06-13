'use client'
import { SSRProvider } from "react-bootstrap";

const page = ({params}) => {
    console.log(params);
  return (
    <SSRProvider>
    <div>{params.slug}</div>
    </SSRProvider>
  )
}

export default page