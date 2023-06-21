import { Job } from './job-app-model.dependency'

export default interface JobAppModelPort {
  getJobs: (page: number) => Job[]
  getTotalPages: () => number
  getJobsById: (id: string) => Job | null
  getAll: () => Job[]
}
