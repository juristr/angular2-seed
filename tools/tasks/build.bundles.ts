import {parallel} from 'async';
import {join} from 'path';
import * as Builder from 'systemjs-builder';
import {BUNDLES_DEST, SYSTEM_CONFIG_BUILDER} from '../config';

const BUNDLE_OPTS = {
  minify: true,
  sourceMaps: true,
  format: 'cjs'
};

export = function bundles(gulp, plugins) {
  return function (done) {
    let builder = new Builder(SYSTEM_CONFIG_BUILDER);

    parallel([
      bundleLibs,
      bundleApp
    ], () => done());

    function bundleLibs(done) {
      builder.bundle(
        'angular2/angular2 + angular2/router + angular2/http',
        join(BUNDLES_DEST, 'libs.js'), BUNDLE_OPTS).then(done);
    }

    function bundleApp(done) {
      builder.bundle(
        'bootstrap - angular2/*',
        join(BUNDLES_DEST, 'app.js'), BUNDLE_OPTS).then(done);
    }
  };
};
