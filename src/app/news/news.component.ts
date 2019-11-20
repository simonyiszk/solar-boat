import {Component, OnInit} from '@angular/core';

import {news} from '../news.data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news = news;

  constructor() {
  }

  ngOnInit() {
  }

}
