/**
 * Copyright (c) 2019-present, enkhee-Osiris.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { withApi } from '@/utils';

function Home({ api }) {
  function helloWorld() {
    api.foo().then(() => console.warn('done'));
  }

  return (
    <>
      <button type="button" onClick={helloWorld}>
        Click here
      </button>
    </>
  );
}

export default withApi(Home);
