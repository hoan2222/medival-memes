

import Card from "./card";

const reqUrl = 'http://medival-admin.byethost6.com/wp-json/wp/v2/titles?acf_format=standard&_fields=id,title';

const Content = async () => {

    const req = await fetch(reqUrl, {cache: 'no-store'});
    const contents = await req.json();

    

    return(

        <section className="flex justify-between overflow-x-hidden w-full no-scrollbar" id="generator">
                 <div className="flex w-full overflow-auto [&>div]:flex-shrink-0 px-10 no-scrollbar">
                    {contents.map(content => (
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