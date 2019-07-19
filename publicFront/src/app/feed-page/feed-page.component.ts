import { CardFeedComponent } from './../card-feed/card-feed.component';
import { B64 } from './Base64Image';
import { FeedCard } from './../Models/FeedCard';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  cards = [];
  constructor() {
    this.cards = this.getCardsMock();
  }

  ngOnInit() {
  }

  getCardsMock(): FeedCard[] {
    const cadsToReturn = new Array<FeedCard>();
    for (let i = 0; i < 10; i++) {
      const card: FeedCard = {
        cardTitle: 'This is My Title',
        cardSubtitle: 'This is My Subtitle',
        base64Image: this.getMockImage(),
        text: this.getText(),
        likeNumber: 12
      };
      cadsToReturn.push(card);
    }
    return cadsToReturn;
  }

  getMockImage(): string {
    const base = new B64();
    return base.base;
  }

  getText(): string {
    return "May your smile."+
    " Shine on."+
    " Don't be scared."+
    " Your destiny may keep you warm."+

    " Cause all of the stars."+
    " Are fadin' away."+
    " Just try not to worry."+
    " You'll see them some day."+
    " Take what you need."+
    " And be on your way."+
    " And stop cryin' your heart out.";
  }
}
