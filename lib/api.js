import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';
const docsProps = `
title, subtitle, "slug":slug.current,
date,'coverImage': coverImage.asset->url, 
'author':author->{name, 'avatar':avatar.asset->url},


`

const builder = imageUrlBuilder(client)

export function urlFor(source) {
return builder.image(source);
}

export const  getAllBlogs = async({offset = 0, date ='desc'}={offset:0, date: 'desc'}) => {
    const result = await client.fetch(`*[_type == 'blog'] | order(date ${date}) {${docsProps}}[${offset}...${offset}+3]`);
    console.log('result', result)
    return result;
}


export const getAllSlugData = async(slug) => {
    const result = await client.fetch(`*[_type == 'blog' && slug.current == $slug]{${docsProps}content}`,{slug})
        .then(res => res?.[0]);
    return result;
}