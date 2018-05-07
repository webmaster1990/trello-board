import React from 'react';
import Bucket from './Bucket';
import { shallow } from 'enzyme';

const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('(Component) Bucket', () => {
  let _component;
  beforeEach(() => {
    _component = shallow(<Bucket />);
  });

  it('Renders div', () => {
    const firstDiv = _component.find('div');
    expect(firstDiv).to.exist;
  });
});