import Route from '@ember/routing/route';
import fetch from "fetch";

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/data/sends.json');
    let data = await response.json();
    return data.sends;
  }
}
