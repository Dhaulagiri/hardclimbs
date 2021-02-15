import Controller from '@ember/controller';

export default class IndexController extends Controller {
  columns = [
    {
      name: `Climb`,
      valuePath: `Climb`
    },
    {
      name: `Name`,
      valuePath: `name`
    }
  ]
}
