import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css'],
})
export class VoterComponent implements OnInit {
  constructor() {}

  @Input()
  public question: string;

  @Input()
  public yesAnswer: string;

  @Input()
  public noAnswer: string;

  @Output()
  public output = new EventEmitter<boolean>();

  ngOnInit(): void {}
  public vote(vote: any): void {
    this.output.emit(vote);
  }
}
