import { VolumesStore } from "../stores/VolumesStore";
jest.mock("../agent");
import agent from '../agent';

describe("VolumesStore", function() {
  let store;
  beforeEach(function() {
    store = new VolumesStore();
    store.loadVolumes();
    /*store.volumesMap = [
      {"order_number":1,"title":"Cats","chapters":
        [{"title":"Maine Coon","id":"rkcJ0TTgG"},{"title":"Siamese","id":"B1DrCTpgM"}],
        "id":"rkptjCZxG"
      },
      {"order_number":2,"title":"Dogs","chapters":
        [{"title":"Labrador","id":"r1_66pTxM"},{"title":"Husky","id":"r19NC6Tlz"},{"title":"Sausage dog","id":"S1grCTaez"}],
        "id":"rkETjCbeM"
      }
    ];*/
  });
  it("adds new chapter", function() {
    expect(store.volumesMap[0].chapters.length).toBe(2);
    store.addChapter({title: "Lynx", position: 1, chapterId: "testid", volumeId: "rkptjCZxG"});
    expect(store.volumesMap[0].chapters.length).toBe(3);
  });
  it("deletes chapter", function() {
    expect(store.volumesMap[0].chapters.length).toBe(2);
    store.deleteChapter({chapterId: "rkcJ0TTgG", volumeId: "rkptjCZxG"});
    expect(store.volumesMap[0].chapters.length).toBe(1);
  });
  it("calls agent.Volumes.all", function() {
    /*return agent.Volumes.all()
    .then(data => {
      store.volumesMap = data;
      expect(store.volumesMap.length).toBe(3);
      //expect(data).toBeDefined();
      //expect(data[2].title).toEqual("Birds");
    })*/
    const spy = jest.spyOn(agent.Volumes, 'all');
    store.loadVolumes();
    expect(spy).toHaveBeenCalled();
  });
  it("sets volumesMap after loading volumes", function() {
    expect.assertions(1);
    store.loadVolumes().then(() => {
        expect(store.volumesMap.length).toBe(3);
    });
  });
})
