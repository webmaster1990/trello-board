import React from 'react';
import BucketItem from './BucketItem';
import { shallow } from 'enzyme';

const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('(Component) BucketItem', () => {
  let _component;
  beforeEach(() => {
    _component = shallow(<BucketItem />);
  });

  it('Renders div', () => {
    const firstDiv = _component.find('div');
    expect(firstDiv).to.exist;
  });
});