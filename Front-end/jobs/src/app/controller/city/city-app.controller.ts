import { City, CityAppControllerPort } from './city-app-controller.dependency'

export default class CityAppController implements CityAppControllerPort {
  getDefaultCities = (): City[] => []
}
