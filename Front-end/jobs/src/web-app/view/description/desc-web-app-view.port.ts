import { Request, Response, WebAppViewPort } from './desc-web-app-view.dependency'

export default interface JobDescViewWebAppPort extends WebAppViewPort {
  index: (req: Request, res: Response) => void
}