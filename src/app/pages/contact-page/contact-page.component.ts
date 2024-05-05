import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subscription, take } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {
  // selectedContactId!: ''
  
  private contactService = inject(ContactService);
  private loaderService = inject(LoaderService)
  
  isLoading$: Observable<boolean> = this.loaderService.isLoading$
  contacts$: Observable<Contact[]> = this.contactService.contacts$


  ngOnInit(): void {
    // this.contacts$ = this.contactService.contacts$
  }

  onRemovePet(contactId: string) {
    this.loaderService.setIsLoading(true)
    this.contactService.remove(contactId)
      .pipe(take(1))
      .subscribe({
        next: () => this.loaderService.setIsLoading(false),
        error: err => console.log('err:', err)
      })
  }

}
