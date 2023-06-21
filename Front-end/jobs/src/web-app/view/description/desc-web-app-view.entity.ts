export interface JobDescViewEntity {
    id: string
    category: string
    city: string
    published: string
  }

  export interface CityJobDescViewEntity {
    id: string
    name: string
  }

  export interface DescViewEntity {
    job: JobDescViewEntity
    city: CityJobDescViewEntity
  }