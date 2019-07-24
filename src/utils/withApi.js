/**
 * Copyright (c) 2019-present, enkhee-Osiris.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useContext } from 'react';
import Api from '@/api';

const ApiContext = createContext(new Api());

const withApi = Component => (props) => {
  const api = useContext(ApiContext);

  return <Component {...props} api={api} />;
};

export { withApi as default, ApiContext };
