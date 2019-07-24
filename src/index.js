/**
 * Copyright (c) 2019-present, enkhee-Osiris.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HomeScreen } from './screens';
import './style.scss';

function Root() {
  return (
    <>
      <HomeScreen />
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
