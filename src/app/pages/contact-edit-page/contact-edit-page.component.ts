import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrl: './contact-edit-page.component.scss'
})
export class ContactEditPageComponent implements OnInit {

  private contactService = inject(ContactService)
  //* Here I receive a partial contact from the service
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  
  contact = this.contactService.getEmptyContact()

  ngOnInit(): void {

    this.route.data.pipe(
      map(data => data['contact']),
      filter(contact => contact),      
    ).subscribe(contact => {
      this.contact = contact
    })
  }

  onSaveContact() {
    console.log('saving,', this.contact);

    //* Here I save the partial as a Contact object
    this.contactService.save(this.contact as Contact)
      .subscribe({
        next: () => { this.router.navigateByUrl('/contact') },
        error: err => console.log('err', err)
      })

  }



}
