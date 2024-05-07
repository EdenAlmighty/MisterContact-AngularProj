import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subscription, take } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  
  contacts$: Observable<Contact[]> = this.contactService.contacts$

  constructor(private contactService: ContactService) { }

  onRemoveContact(contactId: string) {
      this.contactService.remove(contactId).subscribe({
          error: err => console.log('err:', err)
      })
  }

  faPlus = faCirclePlus
}
