

export async function GET() {
    const res = await fetch('http://kjflaksjdfhkjsdf.medianewsonline.com/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return Response.json(data)
  }