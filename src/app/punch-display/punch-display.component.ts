import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';

@Component({
  selector: 'app-punch-display',
  templateUrl: './punch-display.component.html',
  styleUrls: ['./punch-display.component.css']
})
export class PunchDisplayComponent implements OnInit {
  newsDetail;

  constructor(private newService: NewsDetailService) {

  }

  ngOnInit() {
    this.fetchNewsDetail();
  }

  fetchNewsDetail() {
    this.newsDetail = this.newService.getNewsDetail();
    console.log(this.newsDetail);
  }

}
