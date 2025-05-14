import {nanoid} from "nanoid"

export const collection = {
    collectionName: "Fall Limited Edition",
    price: 125,
    formerPrice: "$250",
    discount: "50%",
    id:nanoid(),
    products: [
        {   name: "product 1",
            id: nanoid(),
            thumbnail: "/image-product-1-thumbnail.jpg",
            bigImage: "/image-product-1.jpg"
        },
        {   name: "product 2",
            id: nanoid(),
            thumbnail: "/image-product-2-thumbnail.jpg",
            bigImage: "/image-product-2.jpg"
        },
        {   name: "product 3",
            id: nanoid(),
            thumbnail: "/image-product-3-thumbnail.jpg",
            bigImage: "/image-product-3.jpg"
        },
        {   name: "product 4",
            id: nanoid(),
            thumbnail: "/image-product-4-thumbnail.jpg",
            bigImage: "/image-product-4.jpg"
        },
        
    ]
}