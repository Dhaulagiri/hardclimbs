import Controller from '@ember/controller';
export default class IndexController extends Controller {
  get ascent() {
    return this.model.firstObject;
  }
}
