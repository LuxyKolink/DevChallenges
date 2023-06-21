import { LIMIT } from '../../model/job/job-app-model.dependency'
import { Job, JobAppControllerPort, JobAppModelPort } from './job-app-controller.dependency'

export default class JobAppController implements JobAppControllerPort {
  constructor (private readonly jobAppModel: JobAppModelPort) { }
  getAllPages = (): number => {
    return this.jobAppModel.getTotalPages()
  }

  getJobs = (page: number): Job[] => {
    return this.jobAppModel.getJobs(page)
  }

  getJobById = (id: string): Job | null => {
    return this.jobAppModel.getJobsById(id)
  }

  getJobsByKeyword = (keyword: string, page: number): Job[] => {
    const jobs = this.jobAppModel.getAll();
    const start = LIMIT * (page - 1);
    const end = LIMIT * page;
  
    return jobs.filter(job => {
      return job.job.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
    }).slice(start, end);
  }
  
  getJobsByCity = (name: string, page: number): Job[] => {
    const jobs = this.jobAppModel.getAll();
    const start = LIMIT * (page - 1);
    const end = LIMIT * page;
  
    return jobs.filter(job => {
      return job.location.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    }).slice(start, end);
  }
  
  getJobsByCategory = (id: number, page: number): Job[] => {
    const jobs = this.jobAppModel.getAll();
    const start = LIMIT * (page - 1);
    const end = LIMIT * page;
  
    return jobs.filter(job => {
      return job.category.id === id;
    }).slice(start, end);
  }

  // getJobsByFilters = (page: number, filters: { keyword?: string, city?: string, location?: string, fulltime?: boolean}) => {
  //   const jobs = this.jobAppModel.getAll();
  //   const start = LIMIT * (page - 1)
  //   const end = LIMIT * page

  //   const jobFilters = jobs.map(job=>{
  //     if(filters.keyword && !job.job.toLocaleLowerCase().includes(filters.keyword.toLocaleLowerCase())){
  //       return null
  //     }
  //     if(filters.city && !job.location.name.toLocaleLowerCase().includes(filters.city.toLocaleLowerCase())){
  //       return null
  //     }
  //     if(filters.location && !job.location.name.toLocaleLowerCase().includes(filters.location.toLocaleLowerCase())){
  //       return null
  //     }
  //     if(filters.fulltime && job.category.id!=1){
  //       return null
  //     }
  //     return job;
  //   })

  //   return {
  //     jobs: (jobFilters as Job[]).filter(job=>job!=null).slice(start, end), 
  //     pages: Math.ceil(jobFilters.length/5)
  //   };
  // }
}
