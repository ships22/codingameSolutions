import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  public question = 'Too easy';
  public yesAnswer = 'Yes';
  public noAnswer = 'No';
  public answer;
  constructor() {}

  ngOnInit(): void {}
  setVote(e: boolean) {
    console.log(e);

    this.answer = e ? this.yesAnswer : this.noAnswer;
  }
}
