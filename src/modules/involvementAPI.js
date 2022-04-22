// src/modules/involvementAPI.js - static class that deals with call to involvement API

export default class InvolvementAPI {
  static baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  static appKey = 'qv8KnQaoWUVJfj8Oz7Qq';
  // static appKey = '6EARLHJYvrvfUKinMeCd';

  static likesEnd = '/likes';

  static commentsEnd = '/comments';

  static async getComments(id) {
    const commentsURL = `${this.baseURL}${this.appKey}${this.commentsEnd}?item_id=${id}`;
    const response = await fetch(commentsURL);
    const data = response.json();
    return data;
  }

  static async postLike(id) {
    const like2send = {
      item_id: `${id}`,
    };
    const newLikeURL = `${this.baseURL}${this.appKey}${this.likesEnd}`;

    const response = await fetch(newLikeURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(like2send),
    });

    return response;
  }

  static async getLIkes() {
    const likesURL = `${this.baseURL}${this.appKey}${this.likesEnd}`;
    const response = await fetch(likesURL);
    const data = response.json();
    return data;
  }
}