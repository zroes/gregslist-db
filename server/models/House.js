import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    rentable: { type: Boolean, default: false },
    category: { type: String, enum: ['house', 'apartment', 'duplex'] }
  },
  { timestamps: true }
)