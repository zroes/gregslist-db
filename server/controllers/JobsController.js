import { jobsService } from "../services/JobsService.js"
import BaseController from "../utils/BaseController.js"


export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .post('', this.createJob)
      .get('', this.getJob)
  }
  async createJob(req, res, next) {
    try {
      const newJobData = req.body
      const newJob = await jobsService.createJob(newJobData)
      res.send(newJob)
    } catch (error) {
      next(error)
    }
  }

  async getJob(req, res, next) {
    try {
      const query = req.query
      const jobs = await jobsService.getJob(query)
      res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

}