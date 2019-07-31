import { Component, OnInit } from '@angular/core';
import { B64 } from './photo';
import { Members } from '../Models/AboutUs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})



export class AboutComponent implements OnInit {
  merbers = [];
  constructor() { 
    this.merbers = this.getMembers()}

  ngOnInit() {
  }


  getMembers(): Members[] {
    const membersToReturn = new Array<Members>();
    for (let i = 0; i < 4; i++) {
      const member: Members = {
        memberName: this.getName(),
        memberPost: this.getPost(),
        photo: this.getMockImage(),
        text: this.getText(),
      };
      membersToReturn.push(member);
    }
    return membersToReturn;
  }

  getMockImage(): string {
    const base = new B64();
    return base.base;
  }

  getText(): string {
    return "descriçao da formação e especialidades";
  }

  getName(): string {
    return "junior";
    }

  getPost(): string {
    return "desenvolvedor";
    }
}
