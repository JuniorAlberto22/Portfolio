import { Component, OnInit, Input } from '@angular/core';
import { MatButton, MatCard, MatCardImage } from '@angular/material';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-card-feed',
  templateUrl: './card-feed.component.html',
  styleUrls: ['./card-feed.component.css']
})
export class CardFeedComponent implements OnInit {

  @Input()
  cardTitle;

  @Input()
  cardSubtitle;

  @Input()
  base64Image;

  @Input()
  text;

  @Input()
  likeNumber;

  constructor() { }

  ngOnInit() {
  }

}
