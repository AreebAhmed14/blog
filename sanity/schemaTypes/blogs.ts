

const blog = {
    title:"Blogs",
    name:"blogs",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string",
        },
        {
            name:"id",
            title:"id",
            type:"number",
        },
        {
            name:"detail",
            title:"detail",
            type:"text",
            description:"Full blog content."
        },
        {
            name:"laptopdetail",
            title:"laptop detail",
            type:"text",
            description:"Full blog content show on laptop only."
        },
        {
            name:"shortdetail",
            title:"Short detail",
            type:"text",
            description:"Some lines from detail. appear in blog cover."
        },
        {
            name:"coverImage",
            title:"Cover Image",
            type:"image",
        }
    ]
}
export default blog