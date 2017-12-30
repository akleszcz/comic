import React from 'react';
import {shallow, mount} from 'enzyme';
import VolumeMenu from '../components/VolumeMenu';
import Enzyme from "enzyme";
import { MemoryRouter as Router, withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { Provider } from 'mobx-react';
import { ChapterStore } from '../stores/chapterStore';
import { UserStore } from '../stores/userStore';
import jsdom from 'jsdom';
jest.mock("../agent");
import agent from '../agent';

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("VolumeMenu", function() {
  let userStore, chapterStore, volumeDetails, volumeNumber, stores, wrapper;
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.document = doc;
  global.window = doc.defaultView;

  beforeEach(function() {
    userStore = new UserStore(),
    chapterStore = new ChapterStore(),
    volumeDetails = {
      "volume_id": "rkptjCZxG",
      "order_number":1,
      "title":"Cats",
      "chapters": [
        {"title":"Maine Coon","id":"rkcJ0TTgG"},
        {"title":"Siamese","id":"B1DrCTpgM"}
      ]
    },
    volumeNumber = 1;
    stores = {
      userStore,
      chapterStore
    };
    userStore.setUser().then(() => wrapper = mount(<Provider {...stores}><Router><VolumeMenu volumeDetails={volumeDetails} volumeNumber={volumeNumber} chapterStore={chapterStore} userStore={userStore}/></Router></Provider>));
  });

    it('displays volume title', function() {
      expect(wrapper.find(".volume-menu").find('h2').at(0).text()).toBe("Volume 1: Cats");
    });

    it('hides chapters when clicked', function() {
      expect(wrapper.find('ul').children().length).toBe(volumeDetails.chapters.length);
      wrapper.find(".volume-menu").find('h2').simulate('click');
      expect(wrapper.find('ul').children().length).toBe(0);
    });

    it('displays delete button for each chapter if logged user has admin permissions', function() {
      expect(wrapper.find('button.delete-chapter').length).toBe(volumeDetails.chapters.length);
    });

    it('displays add button after each chapter if logged user has admin permissions', function() {
      expect(wrapper.find('.add-chapter-container').length).toBe(volumeDetails.chapters.length);
    });

    it('calls chapterStore.deleteChapter on delete button click', function() {
      const deleteChapter = wrapper.find('button.delete-chapter').at(0);
      expect(wrapper.find('ul').children().length).toBe(2);
      const spy = jest.spyOn(chapterStore, 'deleteChapter');
      deleteChapter.simulate('click');
      expect(spy).toHaveBeenCalled();
    });
});
