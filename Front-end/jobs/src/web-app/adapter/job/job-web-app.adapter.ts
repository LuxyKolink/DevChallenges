
import { Job, JobAppControllerPort, JobWebAppAdapterPort } from './job-web-app-adapter.dependency'

export default class JobWebAppAdapter implements JobWebAppAdapterPort {
  constructor (private readonly jobAppController: JobAppControllerPort) { }

  getJobs = (page: number): Job[] => {
    return this.jobAppController.getJobs(page)
  }

  getTotalJobs = (): number => {
    return this.jobAppController.getAllPages();
  }

  getJobsByKeyword = (keyword: string, page: number): Job[] => {
    return this.jobAppController.getJobsByKeyword(keyword, page)
  }

  getJobsByCity = (name: string, page: number): Job[] => {
    return this.jobAppController.getJobsByKeyword(name, page)
  }

  getJobsByZip = (code: string, page: number): Job[] => {
    console.error(code + String(page), 'Not implemented')
    return []
  }

  getJobsByCategory = (id: number, page: number): Job[] => {
    return this.jobAppController.getJobsByCategory(id, page)
  }

  getJobById = (id: string): Job | null => {
    return this.jobAppController.getJobById(id)
  }

  // getJobsByFilters = (page: number, filters: {keyword?: string, city?: string, location?: string, fulltime?: boolean}) => {
  //   return this.jobAppController.getJobsByFilters(page, filters);
  // }
}
