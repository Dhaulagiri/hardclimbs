import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';

export default class IndexController extends Controller {
  @readOnly('model.firstObject') ascent;
}
