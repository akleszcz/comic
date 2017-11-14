import React from 'react';
import {shallow, mount} from 'enzyme';
import Foo from '../components/Foo';
import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Foo", () => {
  it("counter", () => { /*'PageNavigation increases page number after "next" arrow is clicked'*/
  const wrapper = mount(<Foo />);

  expect(wrapper.find('.clicks-0').length).toEqual(1);
  wrapper.find('a').simulate('click');
  expect(wrapper.find('.clicks-1').length).toEqual(1);
  });
});
