import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsDetailService {
  PUNCH_URL = 'http://localhost:3004/news/punchng';
  PUNCH_STORY = 'http://localhost:3004/news/punchng/story';
  newsStory = [];
  data: object;

  constructor(private http: HttpClient) { }

  displayNews(news) {
    this.http.post(this.PUNCH_STORY, news)
      .subscribe(story => {
        this.newsStory.push({...news, ...story})
      })
  }

  get newsDetails() {
    return this.http.get(this.PUNCH_URL)
  }

  fetchNews() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  saveNewsDetail(data: object) {
    // this implementation does not persist if you reload the data would be lost;
    // return this.data = data;
    return sessionStorage.setItem('newsDetail', JSON.stringify(data));
  }

  getNewsDetail() {
    // this implementation does not persist if you reload the data would be lost;
    // return this.data;
    return JSON.parse(sessionStorage.getItem('newsDetail'));
  }




}
