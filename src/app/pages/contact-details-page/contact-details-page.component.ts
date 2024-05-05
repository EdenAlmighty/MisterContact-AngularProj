import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { Observable, Subscription, filter, lastValueFrom, map, switchMap } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {

  @Input() contactId!: string
  @Output() back = new EventEmitter()

  private contactService = inject(ContactService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private subscription!: Subscription

  // contact!: Contact
  // contact$!: Observable<Contact>
  contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))
  ans!: string



  async ngOnInit(): Promise<void> {
    // this.contact$ = this.contactService.getById(this.contactId)
    //   this.contact$ = this.route.params.pipe(
    //         switchMap(params => this.contactService.getById(params['id']))
    //     )
  }

  onBack() {
    this.router.navigate(['/contact'])
  }

  ngOnDestroy(): void {

  }
}
