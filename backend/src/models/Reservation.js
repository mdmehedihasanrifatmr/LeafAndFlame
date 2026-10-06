import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        table: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Table",
            required: true,
        },

        customer_name: {
            type: String,
            required: true,
            trim: true,
        },

        customer_phone: {
            type: String,
            required: true,
            trim: true,
        },

        date: {
            type: Date,
            required: true,
        },

        number_of_guest: {
            type: Number,
            required: true,
            min: 1,
        },

        status: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "seated",
                "completed",
                "cancelled",
                "no_show",
            ],
            default: "pending",
        },

        special_request: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;