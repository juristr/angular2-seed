import {join} from 'path';
import {APP_SRC, ENV} from '../config';

export = function watchDev(gulp, plugins) {
  return function () {
    plugins.watch(join(APP_SRC, '**/*'), () => gulp.start(`build.${ENV}`));
  };
};
