import {
    Request,
    Response,
    DescViewWebAppPort,
    JobWebAppAdapterPort,
    DescViewEntity,
    DateUtil
  } from './desc-web-app-view.dependency'
  
  export default class JobDescWebAppView implements DescViewWebAppPort {
    title = 'Jobs Web App'
    constructor (
      private readonly jobWebAppAdapter: JobWebAppAdapterPort
    ) { }
  
    index = (req: Request, res: Response): void => {
      let { id } = req.params

      const job = this.jobWebAppAdapter.getJobById(id);
      if (job) {
        console.log(`Job found: ${job.job}`);
        } else {
        console.log(`Job with id ${id} not found`);
        }
    //   console.log(job);
      if(!job){
        return res.redirect('/');
      }
  
      const daysAgo: number = DateUtil.getInstance().getDaysFromDate(job.published)
      const published: string = (daysAgo === 1) ? 'Less than a day ago' : `${daysAgo} days ago`
  
      const model: DescViewEntity = {
        job: {
            id: job.id.toString(),
            category: job.category.description,
            published,
            city: job.location.name  
        },
        city: {
            id: job.location.id.toString(),
            name: job.location.name
        }
      }
    //   console.log(model);
      res.render('description', { data: model, title: this.title })
    }
  }
  