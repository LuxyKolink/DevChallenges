import { CityAppControllerPort } from './app/controller/city/city-app-controller.dependency'
import CityAppController from './app/controller/city/city-app.controller'
import { JobAppControllerPort, JobAppModelPort } from './app/controller/job/job-app-controller.dependency'
import JobAppController from './app/controller/job/job-app.controller'
import { Job, JobRepositoryJsonAdapterPort } from './app/model/job/job-app-model.dependency'
import JobAppModel from './app/model/job/job-app.model'
import JobRepositoryJsonAdapter from './repository/adapter/json/job/job-repository-json.adapter'
import { CityWebAppAdapterPort } from './web-app/adapter/city/city-web-app-adapter.dependency'
import CityWebAppAdapter from './web-app/adapter/city/city-web-app.adapter'
import { JobWebAppAdapterPort } from './web-app/adapter/job/job-web-app-adapter.dependency'
import JobWebAppAdapter from './web-app/adapter/job/job-web-app.adapter'
import { ErrorWebAppViewPort, IndexWebAppViewPort, WebAppRouterPort } from './web-app/router/web-app-router.dependency'
import WebAppRouter from './web-app/router/web-app.router'
import JobDescWebAppView from './web-app/view/description/desc-web-app-view'
import ErrorWebAppView from './web-app/view/error/error-web-app.view'
import IndexWebAppView from './web-app/view/index/index-web-app.view'
import WebApp from './web-app/web-app'

const cityAppController: CityAppControllerPort = new CityAppController()
const cityWebAppAdapter: CityWebAppAdapterPort = new CityWebAppAdapter(cityAppController)
const jobRepositoryJsonAdapter: JobRepositoryJsonAdapterPort<Job> = new JobRepositoryJsonAdapter()
const jobAppModel: JobAppModelPort = new JobAppModel(jobRepositoryJsonAdapter)
const jobWebAppController: JobAppControllerPort = new JobAppController(jobAppModel)
const jobWebAppAdapter: JobWebAppAdapterPort = new JobWebAppAdapter(jobWebAppController)
const indexWebAppView: IndexWebAppViewPort = new IndexWebAppView(jobWebAppAdapter, cityWebAppAdapter)
const jobDescWebAppView: JobDescWebAppView = new JobDescWebAppView(jobWebAppAdapter)
const errorWebAppView: ErrorWebAppViewPort = new ErrorWebAppView()
const router: WebAppRouterPort = new WebAppRouter(indexWebAppView, errorWebAppView, jobDescWebAppView)
const jobs: WebApp = new WebApp(router)
jobs.start()
