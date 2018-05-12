import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  hstyle;
  mstyle;
  sstyle;

  fakeArray(number) {
    return new Array(number);
  }

  constructor() {
  }

  ngOnInit() {
    let t = new Date();
    this.sstyle = 'rotate(' + (t.getSeconds() * 6 + t.getMilliseconds() * 0.006) + 'deg)';
    this.mstyle = 'rotate(' + (t.getMinutes() * 6 + t.getSeconds() * 0.1) + 'deg)';
    this.hstyle = 'rotate(' + (t.getHours() * 30 + t.getMinutes() * 0.5) + 'deg)';
    setInterval(() => {
      let t = new Date();
      this.sstyle = 'rotate(' + (t.getSeconds() * 6 + t.getMilliseconds() * 0.006) + 'deg)';
    }, 40);
    setInterval(() => {
      let t = new Date();
      this.mstyle = 'rotate(' + (t.getMinutes() * 6 + t.getSeconds() * 0.1) + 'deg)';
    }, 5000);
    setInterval(() => {
      let t = new Date();
      this.hstyle = 'rotate(' + (t.getHours() * 30 + t.getMinutes() * 0.5) + 'deg)';
    }, 60000);
  }

}
