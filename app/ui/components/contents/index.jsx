'use client'

import useSWR from 'swr';
import React from 'react';

import Card from "./card";


const fetcher = (url) => fetch(url).then((res) => res.json());

const Content =  () => {

    const { data, error} = useSWR(
        "https://kjflaksjdfhkjsdf.medianewsonline.com/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf",
        fetcher
        );

    if(error) {console.log(error); return <h1>failure</h1>};
    if(!data) return <h1>loading...</h1>

    
    return(
        <section className="flex justify-between overflow-x-hidden w-full no-scrollbar" id="generator">
                 <div className="flex w-full overflow-auto [&>div]:flex-shrink-0 px-10 no-scrollbar">
                    {data?.map((content) => (
                        <Card 
                        key={content.id}
                        title={content.title.rendered}
                        summary={content.acf.summary}
                        image={content.acf.thumbnail}
                        />

                    ))}
                </div>
        </section>
       
    )
}

export default Content;





