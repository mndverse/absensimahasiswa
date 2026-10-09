import Application from '@ember/application';
import Resolver from 'ember-resolver';
import compatModules from '@embroider/virtual/compat-modules';
import config from 'absensi-mahasiswa/config/environment';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';

if (macroCondition(isDevelopingApp())) {
importSync('./deprecation-workflow');
}

export default class App extends Application {
modulePrefix = config.modulePrefix;
podModulePrefix = config.podModulePrefix;
Resolver = Resolver.withModules(compatModules);
inspector = setupInspector(this);
}
