

import Card from "./card";


const Content =  async () => {

    const data = await getData();

    if (error) return <div>failed to load...</div>
    if (isLoading) return <div>loading...</div>
    return(
        <section className="flex justify-between overflow-x-hidden w-full no-scrollbar" id="generator">
                 <div className="flex w-full overflow-auto [&>div]:flex-shrink-0 px-10 no-scrollbar">
                    {data?.map((content) => (
                        <Card 
                        key={content.id}
                        title={data.title.rendered}
                        summary={content.acf.summary}
                        image={content.acf.thumbnail}
                        />

                    ))}
                </div>
        </section>
       
    )
}

export default Content;


async function getData(){

    const req = await fetch('http://kjflaksjdfhkjsdf.medianewsonline.com/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf', { next: { revalidate: 3600 } })
    const data = await req.json()

    return data;
}


