import { Job } from './job-app-controller.dependency'

export default interface JobAppControllerPort {
  getJobs: (page: number) => Job[]
  getAllPages: () => number
  getJobById: (id: string) => Job | null
  getJobsByKeyword: (keyword: string, page: number) => Job[]
  getJobsByCity: (name: string, page: number) => Job[]
  getJobsByCategory: (id: number, page: number) => Job[]
  // getJobsByFilters: (page: number, filters: {keyword?: string, city?: string, location?: string, fulltime?: boolean}) => {jobs: Job[], pages: number}
  
}
