import EmberRouter from '@ember/routing/router';
import config from 'hardclimbs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('ascents', function () {
    this.route('ascent', { path: '/:ascent_id' });
  });
});
