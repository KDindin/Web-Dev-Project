import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  simulatePayment(total: number): Observable<boolean> {
    // Check some conditions to determine whether the payment should succeed or fail
    const shouldSucceed = Math.random() >= 0.5;

    if (shouldSucceed) {
      console.log(`Simulating successful payment of ${total}...`);
      return of(true);
    } else {
      console.log(`Simulating failed payment of ${total}...`);
      return of(false);
    }
  }
}
