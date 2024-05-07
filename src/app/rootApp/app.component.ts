import { Component, OnInit, inject } from '@angular/core';
import { BitcoinService } from '../services/bitcoin.service';
import { ContactService } from '../services/contact.service';
import { faAddressBook, faAddressCard, faChartSimple, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MisterBitcoin';

  private contactService = inject(ContactService)
  currPage: string = 'home'

  ngOnInit(): void {
    this.contactService.loadContacts().subscribe({
      error: err => {
              console.log('err:', err)
          }
      })
  }

  toPage(pageName: string) {
      this.currPage = pageName;
  }

  faHouse = faHouse
  faContact = faAddressCard
  faChart = faChartSimple
}