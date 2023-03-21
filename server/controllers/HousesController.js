import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";



export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .get('/:houseID', this.getHouseByID)
      .post('', this.createHouse)
      .put('/:houseID', this.editHouse)
      .delete('/:houseID', this.deleteHouse)
  }

  async getHouses(req, res, next) {
    try {
      const query = req.query
      const houses = await housesService.getHouses(query)
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async getHouseByID(req, res, next) {
    try {
      const houseID = req.params.houseID
      const house = await housesService.getHouseByID(houseID)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async createHouse(req, res, next) {
    try {
      const houseData = req.body
      const newHouse = await housesService.createHouse(houseData)
      res.send(newHouse)
    } catch (error) {
      next(error)
    }
  }
  async editHouse(req, res, next) {
    try {
      const edits = req.body
      const houseID = req.params.houseID
      const editedHouse = await housesService.editHouse(houseID, edits);
      res.send(editedHouse)
    } catch (error) {
      next(error)
    }
  }
  async deleteHouse(req, res, next) {
    try {
      const houseID = req.params.houseID
      await housesService.deleteHouse(houseID)
      res.send(`delted house ${houseID}`)
    } catch (error) {
      next(error)
    }
  }
}