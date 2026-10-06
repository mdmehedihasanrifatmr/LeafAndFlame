import mongoose from "mongoose";

const kitchenItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        unit: {
            type: String,
            required: true,
            enum: [
                "gram",
                "kilogram",
                "milliliter",
                "liter",
                "piece",
                "slice",
            ],
            default:"gram",
        },

        currentStock: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },

        minimumStock: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },

        costPerUnit: {
            type: Number,
            required: true,
            min: 0,
        },

        supplier: {
            type: String,
            trim: true,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        collection: "kitchenitem",
    }
);

const KitchenItem = mongoose.model(
    "KitchenItem",
    kitchenItemSchema
);

export default KitchenItem;