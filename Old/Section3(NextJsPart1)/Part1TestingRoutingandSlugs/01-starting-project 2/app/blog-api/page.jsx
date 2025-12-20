"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function BlogApi() {
  const [list, setList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(setList)
      .catch(console.error);
  }, []);
  console.log(list);
  return (
    <div>
      {list.length > 1 &&
        list.map((ele) => {
          return (
            <p
              key={ele.title}
              onClick={() => router.push(`/blog-api/${ele.id}`)}
            >
              {ele.title}
            </p>
          );
        })}
    </div>
  );
}

export default BlogApi;
