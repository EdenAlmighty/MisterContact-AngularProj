import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ContactService } from '../../services/contact.service'
import { Contact } from '../../models/contact.model'

@Component({
    selector: 'contact-edit-page',
    templateUrl: './contact-edit-page.component.html',
    styleUrls: ['./contact-edit-page.component.scss'],
})
export class ContactEditPageComponent implements OnInit {
    contact!: Contact

    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe(({ contact }) => {
            this.contact = contact || this.contactService.getEmptyContact() as Contact
        })

    }

    async onSaveContact() {
        this.contactService.save(this.contact)
            .subscribe({
                next: () => this.router.navigateByUrl('/contact'),
                error: err => console.log('err:', err)
            })
    }
}
