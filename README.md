## Getting started

Live demo is available at https://akleszcz.github.io/comic

To run this project locally:
- Clone this repo: `git clone git@github.com:akleszcz/comic.git`
- Run `npm install` to install dependencies
- Run `npm start` to start the local server

To execute Jest tests:
- Run `npm run test`

## Functionality

The application is intended to serve as a comic reader website. It allows users to list all comic volumes and chapters, preview all pages in a chapter and navigate between pages.
Additionally, users with administrative permissions can create new chapters or delete existing ones. Test admin user credentials can be used to check this features:
- login: user
- password: Password123

### Future functionality
Features that are planned to be added in the future:
- regular (non-admin) account creation
- volume creation and deletion
- page creation and deletion

## Dependencies
This project uses:
- [create-react-app](https://github.com/facebookincubator/create-react-app) - for initial configuration
- [Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/airbnb/enzyme) - for testing
- [mobX](https://github.com/mobxjs/mobx) - for state management
- [React Router v4](https://github.com/ReactTraining/react-router) - for routing
- [react-icon-base](https://github.com/gorangajic/react-icon-base) - for icon components
- [reactstrap](https://github.com/reactstrap/reactstrap) - for form components
- [superagent](https://github.com/visionmedia/superagent) - for HTTP/HTTPS requests

## Backend API

API server is running at https://comic-rest.azurewebsites.net/api

The source code for this API is available in the [comic-rest-api repository](https://github.com/akleszcz/comic-rest-api).
