import * as runSequence from 'run-sequence';
import {join} from 'path';
import {APP_SRC, ENV} from '../config';
import {notifyLiveReload} from '../utils';

export = function watchServe(gulp, plugins) {
  return function () {
    plugins.watch(join(APP_SRC, '**'), e =>
      runSequence(`build.${ENV}`, () => notifyLiveReload(e))
    );
  };
};
