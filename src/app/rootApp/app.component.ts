import { Component, OnInit, inject } from '@angular/core';
import { BitcoinService } from '../services/bitcoin.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MisterBitcoin';
  // rate!: any
  // error!: string

  // private bitcoinService = inject(BitcoinService)
  // rate = this.bitcoinService.rate$

  // ngOnInit(): void {
  //   console.log("Up");
  // }

  // onGetRate(coins: number = 20) {
  //   this.bitcoinService.getRate(coins).subscribe({
  //     // next: rate => this.rate = rate,
  //     // error: err => this.error = `Failed: ${err.message}`
  //   })
  // }

  private contactService = inject(ContactService)
  currPage: string = 'home'

  ngOnInit(): void {
      this.contactService.query().subscribe({
          error: err => {
              console.log('err:', err)
          }
      })
  }

  toPage(pageName: string) {
      this.currPage = pageName;
  }
}