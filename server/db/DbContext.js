import mongoose from 'mongoose'
import { CarsSchema } from '../models/Car.js';
import { HouseSchema } from "../models/House.js";
import { JobsSchema } from "../models/Job.js";

class DbContext {
  Cars = mongoose.model('Car', CarsSchema);
  Houses = mongoose.model('House', HouseSchema);
  Jobs = mongoose.model('Job', JobsSchema);
}

export const dbContext = new DbContext()
