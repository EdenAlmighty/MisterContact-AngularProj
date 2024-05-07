import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent {

  @Input() contactId!: string
  @Output() back = new EventEmitter()

  private route = inject(ActivatedRoute)
  private router = inject(Router)

  contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))

  onBack() {
    this.router.navigate(['/contact'])
  }
}
