/**
 * Copyright (c) 2019-present, enkhee-Osiris.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import app from 'firebase/app';
import 'firebase/database';
import config from '@/config';

class Api {
  constructor() {
    app.initializeApp(config);

    this.database = app.database();
  }

  foo = () => this.database.ref('foo/1123').set({
    username: 'lel',
    email: 'foo'
  });
}

export default Api;
