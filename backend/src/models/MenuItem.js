import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MenuCategory",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        images: {
            type: [String],
            default: [],
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        preparationTime: {
            type: Number,
            required: true,
            min: 1,
        },

        isAvailable: {
            type: Boolean,
            default: true,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        allergens: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
        collection: "menuitem",
    }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;