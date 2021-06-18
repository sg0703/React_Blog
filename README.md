# React Blog (MERN + Redux)

![License badge](https://img.shields.io/badge/license-Apache-blue)

## Description

React Blog is a full stack Mongo, Express, React and Node (MERN) application that allows users to log in with their Google accounts and post blog posts to a shared homepage. The homepage displays the most recent 20 blog posts from all users.

Key API endpoints are secured by using token verification with the Google API Client Library. Some GET routes are intentionally left open and will be documented in the near future.

At this time, only Google users can log in and post content. This app was built primarily to practice with Google's OAuth Sign-In protocol.

This app uses the following libraries, services, and dev tools in addition to the basic MERN stack:

- [Redux](https://www.npmjs.com/package/redux)
- [React-Redux](https://www.npmjs.com/package/react-redux)
- [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
- [Redux DevTools Extension (Chrome)](https://www.npmjs.com/package/redux-devtools-extension)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Lodash](https://www.npmjs.com/package/lodash)
- [Google API Client Library (Node.js version)](https://developers.google.com/identity/sign-in/web/backend-auth)
- [Google Sign-In (OAuth 2.0)](https://developers.google.com/identity/sign-in/web/sign-in)

React Blog is fully functional in development and will be deployed shortly! Keep checking back to look for the deployed link.

Future goals include:

- Enabling comments
- Ability to "like" posts
- Viewing single posts on a separate page
- Building a user database
- Enabling registration / sign-in outside of the Google network

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

![signed in](screen1.png)
![signed out](screen2.png)

## Installation

To try out your own version of this project, download the source code and set up your Mongo server. You can either develop locally or use MongoDB Atlas.

Be sure to install and run both the backend API and the React dev server.

You will need to create a Google Developer account and register in order to get an API key. There is a link above to developer resources for the Google Sign-In API. It's very detailed and helpful, so check it out.

## Usage

Users click the "Sign In" Google button. Once logged in, users can navigate to the "Your Posts" section to view all of their past posts. They can edit and delete their own past posts.

To write a new post, just click "Create"! The app is working and will be deployed shortly. Check back for a link to the deployed project.

## License

Copyright (c) Sam Gates. All rights reserved.
Licensed under the [Apache](https://www.apache.org/licenses/LICENSE-2.0.txt) license.

## Questions

Check out my [GitHub Profile](https://github.com/sg0703) and my [portfolio page](https://samgates.io)!

Email with questions! You can reach me at sam.j.gates@gmail.com.
