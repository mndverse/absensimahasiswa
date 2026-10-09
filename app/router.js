import EmberRouter from '@embroider/router';
import config from 'absensi-mahasiswa/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = '/absensimahasiswa/';
}

Router.map(function () {
  this.route('beranda');
  this.route('mahasiswa');
  this.route('tentang');
});