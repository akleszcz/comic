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
          "id":"BkeCiRbxG"
        }
      ];
      resolve(data);
    });
  }
};

const Chapters = {
  byId: id =>
    {
      return new Promise((resolve, reject) => {
        const data = {
          "thumbnails": [
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page1.png","id":"1"},
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page2.png","id":"2"},
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page3.png","id":"3"},
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page4.png","id":"4"},
            {"url":"http://comic-rest.azurewebsites.net/images/volume1/chapter2/thumbnails/page5.png","id":"5"}
          ],
          "id":"rkcJ0TTgG"
        };
        resolve(data);
      });
    },
  create: (title, position, volume_id) =>
    {
      return new Promise((resolve, reject) => {
        const data = {
          "success": true,
          "message": "Chapter created successfully",
          "chapter": {
            "id": "BJ7yYvKzf",
            "title": "Test cat 2",
            "position": 4,
            "volume_id": "rkptjCZxG"
          }
        };
        resolve(data);
      });
    },
  delete: (chapter_id, volume_id) =>
    {
      return new Promise((resolve, reject) => {
        const data = {
          "success": true,
          "message": "Chapter removed successfully."
        };
        resolve(data);
      });
    }
};

const User = {
  byToken: () =>
    {
      return new Promise((resolve, reject) => {
        const data = {
          "success": true,
          "login": "user",
          "admin": true
        };
        resolve(data);
      });
    }
};

export default {
  Volumes,
  Chapters,
  User
};
