import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>res.json())
    .then(setData)
  },[])
  return <Component {...pageProps}  data={data}/>;
}
