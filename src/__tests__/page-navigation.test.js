import React from 'react';
import {mount} from 'enzyme';
import PageNavigation from '../components/PageNavigation';
import Enzyme from "enzyme";
import { MemoryRouter as Router, withRouter } from 'react-router-dom';


import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("PageNavigation", () => {
  it("displays proper page number", () => { /*'PageNavigation increases page number after "next" arrow is clicked'*/
    const pageNavigation = mount(<Router><PageNavigation numberOfPages='5' pageNumber='2' chapterNumber='1' volumeNumber='1'/></Router>);
    const numberInput = pageNavigation.find('input').at(0);
    expect(numberInput.props().value).toEqual('2');
  });
});
