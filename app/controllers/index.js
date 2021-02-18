import Controller from '@ember/controller';
export default class IndexController extends Controller {
  columns = [
    {
      name: `Date`,
      valuePath: `date`,
      link: `true`,
    },
    {
      name: `Climb`,
      valuePath: `climb`,
    },
    {
      name: `First Name`,
      valuePath: `first_name`,
    },
    {
      name: `Last Name`,
      valuePath: `last_name`,
    },
    {
      name: `Grade`,
      valuePath: `grade`,
    },
    {
      name: `Area`,
      valuePath: `area`,
    },
    {
      name: `Type`,
      valuePath: `type`,
    },
  ];
}
