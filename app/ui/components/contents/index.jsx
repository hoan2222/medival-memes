
import Card from "./card";

const reqUrl = 'http://medieval-memes.local/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf'

const Content = async () => {

    const req = await fetch(reqUrl);
    const contents = await req.json();    

    console.log('contents[0]', contents[0])

    return(
        <div className="flex justify-between overflow-x-scroll px-28">
            {contents.map(content => (
                <Card 
                key={content.id}
                title={content.title.rendered}
                summary={content.acf.summary}
                image={content.acf.thumbnail}
                />
                
            ))}
        </div>
    )
}

export default Content; 