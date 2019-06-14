import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css']
})
export class PunchComponent implements OnInit {
news;
allNews;
  constructor(private newService: NewsDetailService,private router: Router) {
    this.news = newService.newsDetails;
    this.getNews();
  }



  displayNews(news){
    this.newService.displayNews(news)
  }
  getNews() {
    this.newService.fetchNews().subscribe(data => this.allNews = data);
  }
  ngOnInit() {

  }
  viewNews(newsDetail) {
    this.newService.saveNewsDetail(newsDetail);
    this.router.navigate([`/punch/${newsDetail.id}`]);
  }

}
