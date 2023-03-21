import mongoose from "mongoose";
const Schema = mongoose.Schema

export const JobsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, requried: true }
  },
  { timestamps: true }
)