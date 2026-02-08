'use client'
import React, { useEffect, useState } from "react";
import blogStyles from "./blog.module.css";
import Link from "next/link";

function BlogList() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  console.log(blogData);

  return (
    <div className={blogStyles.blogContainer}>
      <ul className={blogStyles.blogList}>
        {blogData.map((blog) => {
          return (
            <li key={blog.id} className={blogStyles.blogCard}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <Link href={`/blog/${blog.id}`} className={blogStyles.readMore}>
                Read More →
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogList;
