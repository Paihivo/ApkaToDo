import {API_URL} from '../static/const.js'

export async function postTask(task) {
    try {
      const res = await fetch(`${API_URL}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(task)
      });
    } catch (e) {
      throw Error(e);
    }
  }