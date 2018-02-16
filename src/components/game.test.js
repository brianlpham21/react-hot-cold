import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
      shallow(<Game />);
  });

  it('Should return invalid message', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().makeGuess('e');
    wrapper.update();
    expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
  });

  it('Should return valid feedback message', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().makeGuess(10);
    wrapper.update();
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
  });
});
