import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsDetailService {
  PUNCH_URL = 'http://localhost:3004/news/punchng';
  PUNCH_STORY = 'http://localhost:3004/news/punchng/story';
  newsStory = [];

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


}
