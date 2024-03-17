import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        regularPrice:{
            type: Number,
            require: true,
        },
        discountPrice:{
            type: Number,
            required: true,
        },
        bathrooms:{
            type: Number,
            required: true,
        },
        furnished:{
            type: Boolean,
            require: true,
        },
        parking:{
            type: Boolean,
            require: true,
        },
        type:{
            type: String,
            require: true,
        },
        offer:{
            type: Boolean,
            require: true,
        },
        imageUrls:{
            type: Array,
            required: true,
        },
        userRef:{
            type: String,
            require: true,
        },
    }, {timestamps: true}
)

const Listing = mongoose.model('Listing', listingSchema)

export default Listing