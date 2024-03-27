import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestMethods {
  constructor() {}
  async postData(url: string, data = {}) {
    const headers: any = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
      });

      const status = await response.status;
      return status;
    } catch (error) {
      console.error('Error in making the request:', error);
      throw error; 
    }
  }

  async putData(url: string, data = {}) {
    const headers: any = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers,
    });

    const status = await response.status;
    const result = await response.json();
    return [status, result];
  }

  async getData(url: string) {
    const headers: any = {};
    headers['Content-Type'] = 'application/json';

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });
    const status = await response.status;
    const result = await response.json();
    return [status, result];
  }

  async deleteData(url: string) {
    const headers: any = {};

    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });
    const status = await response.status;
    return status;
  }
}
