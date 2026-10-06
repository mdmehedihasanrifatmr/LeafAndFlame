import mongoose from "mongoose";

const recipeIngredientSchema = new mongoose.Schema(
    {
        kitchenItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "KitchenItem",
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: 0,
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
        },
    },
    {
        _id: false,
    }
);

const recipeSchema = new mongoose.Schema(
    {
        menuItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MenuItem",
            required: true,
            unique: true,
        },

        ingredients: {
            type: [recipeIngredientSchema],
            required: true,
            validate: {
                validator: function (ingredients) {
                    return ingredients.length > 0;
                },
                message: "Recipe must have at least one ingredient",
            },
        },
    },
    {
        timestamps: true,
        collection: "recipe",
    }
);

const Recipe = mongoose.model(
    "Recipe",
    recipeSchema
);

export default Recipe;