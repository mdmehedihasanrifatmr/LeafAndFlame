import mongoose from "mongoose";

const kitchenOrderItemSchema = new mongoose.Schema(
    {
        menuItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MenuItem",
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },

        specialRequest: {
            type: String,
            trim: true,
        },
    },
    {
        _id: false,
    }
);

const kitchenOrderSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
        },

        items: {
            type: [kitchenOrderItemSchema],
            required: true,
            validate: {
                validator: function (items) {
                    return items.length > 0;
                },
                message: "Kitchen order must have at least one item",
            },
        },

        status: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "preparing",
                "ready",
                "served",
                "cancelled",
            ],
            default: "pending",
        },

        priority: {
            type: String,
            enum: ["normal", "high"],
            default: "normal",
        },

        startedAt: {
            type: Date,
        },

        completedAt: {
            type: Date,
        },

        notes: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        collection: "kitchenorder",
    }
);

const KitchenOrder = mongoose.model(
    "KitchenOrder",
    kitchenOrderSchema
);

export default KitchenOrder;