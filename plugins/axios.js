import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import Axios from 'axios';

// Set a global mixin to have the http object available inside every component
Vue.mixin({
  data()
  {
    return {
      http: null
    };
  },

  created()
  {
    // HTTP headers
    const headers = {};

    // Try to get a session from the local storage
    const session = window.localStorage.getItem('session');

    // If there is a session in the local storage, set the Authorization
    // header with the session id
    if (session != null)
    {
      const sessionId = JSON.parse(session).id;
      headers.Authorization = sessionId;
    }

    // Create the http object with the proper settings
    this.http = Axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 30 * 1000, // 30 seconds
      headers
    });
  }
});
