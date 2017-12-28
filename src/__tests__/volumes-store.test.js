import { VolumesStore } from "../stores/VolumesStore";
jest.mock("../agent");
import agent from '../agent';

describe("VolumesStore", function() {
  let store;

  beforeEach(function() {
    store = new VolumesStore();
    store.loadVolumes();
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
    const spy = jest.spyOn(agent.Volumes, 'all');
    store.loadVolumes();
    expect(spy).toHaveBeenCalled();
  });

  it("sets volumesMap after loading volumes", function() {
    store.volumesMap = [];
    expect(store.volumesMap.length).toBe(0);
    expect.assertions(2);
    store.loadVolumes().then(() => {
      expect(store.volumesMap.length).toBe(3);
    });
  });
})
