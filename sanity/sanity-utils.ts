import { createClient, groq } from "next-sanity";

export async function getProjects(){
    const client = createClient({
        projectId: "0fwginzl",
        dataset: "production",
        apiVersion:"2023-29-04",
    });

    return client.fetch(
        groq`*[_type = "project]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            utl,
            content
        }`
    )

}