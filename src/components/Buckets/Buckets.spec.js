import React from 'react';
import Buckets from './index';
import { Provider } from 'react-redux';
import store from '../../redux/store/index';
import { shallow } from 'enzyme';

const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('(Component) Buckets', () => {
  let _component;
  beforeEach(() => {
    _component = shallow(
      <Provider store={store}>
        <Buckets/>
      </Provider>
    );
  });

  it('Renders div', () => {
    const firstDiv = _component.find('div');
    expect(firstDiv).to.exist;
  });
});