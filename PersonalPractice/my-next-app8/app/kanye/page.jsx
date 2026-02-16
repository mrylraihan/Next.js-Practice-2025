import React, { Suspense } from "react";


async function ShowQuote (){
  await new Promise((r)=>setTimeout(r,2000))
    const res = await fetch("https://api.kanye.rest");
    const { quote } = await res.json()

  return <h1>{`Kanye would say:${quote}`}</h1>
};

function page() {
  return (
    <main>
        <h3>
        Kanye 
        </h3>
      <Suspense fallback={<div>Loading Quote....</div>}>
      <ShowQuote/>
      </Suspense>
    </main>
  );
}

export default page;
