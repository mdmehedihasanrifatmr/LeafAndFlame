import mongoose from "mongoose";

const menuCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            enum: [
                "Appetizer",
                "Main Course",
                "Burger",
                "Pizza",
                "Rice",
                "Drinks",
                "Dessert",
            ],
        },

        description: {
            type: String,
            trim: true,
        },

        image: {
            type: String,
            trim: true,
        },

        sortOrder: {
            type: Number,
            default: 0,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        collection: "menucategory",
    }
);

const MenuCategory = mongoose.model(
    "MenuCategory",
    menuCategorySchema
);

export default MenuCategory;