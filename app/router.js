import EmberRouter from '@embroider/router';
import config from 'tugas-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('beranda');
  this.route('mahasiswa');
  this.route('tentang');
});
