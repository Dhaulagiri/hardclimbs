import Controller from '@ember/controller';

export default class IndexController extends Controller {
  columns = [
    {
      name: `Date`,
      valuePath: `date`
    },
    {
      name: `Climb`,
      valuePath: `Climb`
    },
    {
      name: `Name`,
      valuePath: `name`
    },
    {
      name: `Grade`,
      valuePath: `Grade`
    },
    {
      name: `Area`,
      valuePath: `Area`
    },
    {
      name: `Type`,
      valuePath: `Type`
    }
  ]
}
