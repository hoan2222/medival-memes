

export async function GET(){

    const reqUrl = 'http://kjflaksjdfhkjsdf.medianewsonline.com/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf';
    const req = fetch(reqUrl, {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      });
    const data = (await req).json();

    return Response.json(data);

}