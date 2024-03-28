

import Card from "./card";


export default async function Content() {

    const contents = await getData();

    return(
        <section className="flex justify-between overflow-x-hidden w-full no-scrollbar" id="generator">
                 <div className="flex w-full overflow-auto [&>div]:flex-shrink-0 px-10 no-scrollbar">
                    {contents.map((content) => (
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




async function getData(){

    const req = await fetch('http://kjflaksjdfhkjsdf.medianewsonline.com/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf', { next: { revalidate: 3600 } })
    const data = await req.json()



    return data;
}