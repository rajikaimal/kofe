// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import type { Store } from '../reducers/types';

type Props = {
  store: Store,
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}
