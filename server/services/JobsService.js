import { dbContext } from "../db/DbContext.js"


class JobsService {
  async createJob(newJobData) {
    const newJob = await dbContext.Jobs.create(newJobData)
    return newJob
  }

  async getJob(query) {
    // we should parse query and remove everything that isnt an alphanumeric
    // use regex (in the future)
    const jobs = await dbContext.Jobs.find(query)
    return jobs

  }

}

export const jobsService = new JobsService()