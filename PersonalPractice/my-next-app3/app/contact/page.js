"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

function ContactPage() {
    const peopleArray = ['Alice', 'Bob', 'Charlie'];
    console.log(peopleArray);
    const router = useRouter();
    
  return (
    <div>
        <h1>Contact Page</h1>
        <ul>
            {peopleArray.map((ele) =>{
                return <li>
                    <Link href={`contact/${ele}`}>{ele}</Link>
                    <button onClick={() => router.push(`contact/${ele}`)}>Go to {ele} page</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ContactPage