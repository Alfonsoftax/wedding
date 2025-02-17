import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {

  timeLeft = {
    days: 182,
    hours: 10,
    minutes: 14,
    seconds: 34
  };

  private subscription: Subscription | undefined;

  ngOnInit() {
    const targetDate = new Date('2025-08-15T00:00:00');
    
    this.subscription = interval(1000).subscribe(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
