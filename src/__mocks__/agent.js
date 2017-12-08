const Volumes = {
  all: () => {
    return new Promise((resolve, reject) => {
      const data = [
        {"order_number":1,"title":"Cats","chapters":
          [{"title":"Maine Coon","id":"rkcJ0TTgG"},{"title":"Siamese","id":"B1DrCTpgM"}],
          "id":"rkptjCZxG"
        },
        {"order_number":2,"title":"Dogs","chapters":
          [{"title":"Labrador","id":"r1_66pTxM"},{"title":"Husky","id":"r19NC6Tlz"},{"title":"Sausage dog","id":"S1grCTaez"}],
          "id":"rkETjCbeM"
        },
        {"order_number":3,"title":"Birds","chapters":
          [{"title":"Owl","id":"Sy37RT6lf"},{"title":"Magpie","id":"HyXVR6Tgz"}],
        "id":"BkeCiRbxG"}
      ];
      resolve(data);
    });
  }
};

export default {
  Volumes
};
