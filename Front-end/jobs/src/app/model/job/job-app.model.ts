import { JobRepositoryJsonAdapterPort, JobAppModelPort, Job, LIMIT } from './job-app-model.dependency'

export default class JobAppModel implements JobAppModelPort {
  constructor (
    private readonly jobRepositoryJsonAdapter: JobRepositoryJsonAdapterPort<Job>) { }
 
  getTotalPages = (): number => {
    return this.jobRepositoryJsonAdapter.getTotalPages()
  }

  getJobs = (page: number): Job[] => {
    const start = LIMIT * (page - 1)
    const end = LIMIT * page
    console.log(`start: ${start}, end: ${end}`)
    return this.jobRepositoryJsonAdapter.getJobsByRange(start, end)
  }

  getJobsById = (id: string): Job | null => {
    return this.jobRepositoryJsonAdapter.getById(id)
  }

  getAll = () => {
    return this.jobRepositoryJsonAdapter.getAll();
  }

}


