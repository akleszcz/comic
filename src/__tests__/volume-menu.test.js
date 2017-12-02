import React from 'react';
import {shallow, mount} from 'enzyme';
import VolumeMenu from '../components/VolumeMenu';
import Enzyme from "enzyme";
import { MemoryRouter as Router, withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { Provider } from 'mobx-react';
//import chapterStore from '../stores/chapterStore';


import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("VolumeMenu", function() {
  let userStore, chapterStore, volumeDetails, volumeNumber, stores;
  beforeEach(function() {
    userStore = {
      currentUser: {
        login: "user5",
        admin: true
      },
      loadingUser: false
    },
      chapterStore = observable({
        currentChapter: {
          "thumbnails": [
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page1.png","id":"1"},
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page2.png","id":"2"},
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page3.png","id":"3"},
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page4.png","id":"4"},
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page5.png","id":"5"}
          ],
          "id":"rkcJ0TTgG"
        },
        get numberOfPages() {
          return this.currentChapter.thumbnails.length;
        },
        get firstPageId() {
          if (this.currentChapter.thumbnails[0]) {
            return this.currentChapter.thumbnails[0].id;
          }
          return null;
        },
        get lastPageId() {
          if (this.currentChapter.thumbnails[this.currentChapter.thumbnails.length - 1]) {
            return this.currentChapter.thumbnails[this.currentChapter.thumbnails.length - 1].id;
          }
          return null;
        },
        loadChapter(id, { acceptCached = false } = {}) {
          this.loadChapterCalled = true;
        },
        createChapter(title, position, volumeId) {
          this.createChapterCalled = true;
        },
        deleteChapter(chapterId, volumeId) {
          this.deleteChapterCalled = true;
        }
      }),
      volumeDetails = {
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
    });
    it('displays volume title', function() {
      const wrapper = mount(<Provider {...stores}><Router><VolumeMenu volumeDetails={volumeDetails} volumeNumber={volumeNumber} chapterStore={chapterStore} userStore={userStore}/></Router></Provider>);
      expect(wrapper.find(".volume-menu").find('h2').at(0).text()).toBe("Volume 1: Cats");
    });
    it('hides chapters when clicked', function() {
      const wrapper = mount(<Provider {...stores}><Router><VolumeMenu volumeDetails={volumeDetails} volumeNumber={volumeNumber} chapterStore={chapterStore} userStore={userStore}/></Router></Provider>);
      expect(wrapper.find('ul').children().length).toBe(volumeDetails.chapters.length);
      wrapper.find(".volume-menu").find('h2').simulate('click');
      expect(wrapper.find('ul').children().length).toBe(0);
    });
});
