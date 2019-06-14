import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';

@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css']
})
export class PunchComponent implements OnInit {
news 
  constructor(private newService: NewsDetailService) { 
    this.news = newService.newsDetails
  }



  displayNews(news){
    this.newService.displayNews(news)
  }
  ngOnInit() {
  }

}
