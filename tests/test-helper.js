import Application from 'hardclimbs/app';
import config from 'hardclimbs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
