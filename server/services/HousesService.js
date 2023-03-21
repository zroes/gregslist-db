import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js"


class HousesService {
  async getHouses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses;
  }
  async getHouseByID(houseID) {
    const house = await dbContext.Houses.findById(houseID)
    if (!house)
      throw new BadRequest("invalid house id");
    return house
  }

  async createHouse(houseData) {
    return await dbContext.Houses.create(houseData)
  }

  async editHouse(houseID, edits) {
    const editedHouse = await dbContext.Houses.findByIdAndUpdate(houseID, edits)
    return editedHouse
  }

  async deleteHouse(houseID) {
    await dbContext.Houses.findByIdAndDelete(houseID)
    return
  }

}

export const housesService = new HousesService()