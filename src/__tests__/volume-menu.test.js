import React from 'react';
import {shallow, mount} from 'enzyme';
import VolumeMenu from '../components/VolumeMenu';
import Enzyme from "enzyme";
import { MemoryRouter as Router, withRouter } from 'react-router-dom';


import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("VolumeMenu", function() {
  let store;
  beforeEach(function() {
      store = {
        volumes:[
          {
            "number":1,
            "title":"First volume",
            "chapters":[
              {
                "title":"First chapter",
                "number":1
              },
              {
                "title":"Second chapter",
                "number":2
              },
              {
                "title":"Third chapter",
                "number":3
              },
              {
                "title":"Fourth chapter",
                "number":4
              }
            ]
          },
          {
            "number":2,
            "title":"Second volume",
            "chapters":[
              {
                "title":"First chapter",
                "number":1
              },
              {
                "title":"Second chapter",
                "number":2
              },
              {
                "title":"Third chapter",
                "number":3
              }
            ]
          },
          {
            "number":3,
            "title":"Third volume",
            "chapters":[
              {
                "title":"First chapter",
                "number":"1"
              },
              {
                "title":"Second chapter",
                "number":"2"
              },
              {
                "title":"Third chapter",
                "number":"3"
              },
              {
                "title":"Fourth chapter",
                "number":"4"
              },
              {
                "title":"Fifth chapter",
                "number":"5"
              },
              {
                "title":"Sixth chapter",
                "number":"6"
              }
            ]
          }
        ]
      }
    });
    it(' hides chapters when clicked', function() {
      const volumeMenu = mount(<Router><VolumeMenu volumeDetails={store.volumes[0]}/></Router>);
      const chaptersList = volumeMenu.find('ul');
      const header = volumeMenu.find('h2');
      console.log({chaptersList});
      expect(chaptersList.children().length).toEqual(store.volumes[0].chapters.length);
      //expect(chaptersList.text()).toEqual('true');
      header.simulate('click');
      //expect(chaptersList.children().length).toEqual(0);
      expect(chaptersList.text()).toEqual('');
    });
});
