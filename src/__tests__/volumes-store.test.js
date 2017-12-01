import { VolumesStore } from "../stores/VolumesStore"

describe("VolumesStore", () => {
  it("adds new chapter", () => {
    const store = new VolumesStore();
    store.volumesMap = [
      {"order_number":1,"title":"Cats","chapters":
        [{"title":"Maine Coon","id":"rkcJ0TTgG"},{"title":"Siamese","id":"B1DrCTpgM"}],
        "id":"rkptjCZxG"
      },
      {"order_number":2,"title":"Dogs","chapters":
        [{"title":"Labrador","id":"r1_66pTxM"},{"title":"Husky","id":"r19NC6Tlz"},{"title":"Sausage dog","id":"S1grCTaez"}],"id":"rkETjCbeM"
      }
    ];
    store.addChapter({title: "Lynx", position: 1, chapterId: "testid", volumeId: "rkptjCZxG"});
    expect(store.volumesMap[0].chapters.length).toBe(3);
  })
})
