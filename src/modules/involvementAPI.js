// src/modules/involvementAPI.js - static class that deals with call to involvement API

export default class InvolvementAPI {
  static baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  static appKey = '6EARLHJYvrvfUKinMeCd';

  static likesEnd = '/likes/';

  static commentsEnd = '/comments';

  static async getComments(id) {
    const commentsURL = `${this.baseURL}${this.appKey}${this.commentsEnd}?item_id=${id}`;
    const response = await fetch(commentsURL);
    const data = response.json();
    // console.log('-->involvementAPI.js - getComments - data: ', data);
    return data;
  }
}