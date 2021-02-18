import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class AscentsAscentRoute extends Route {
  async model(params) {
    let response = await fetch('/data/media.json');
    let data = await response.json();

    let ascent_id = Number(params.ascent_id);
    let media = data.media[0].filter((x) => x.ascent_id === ascent_id);
    return media;
  }
}
