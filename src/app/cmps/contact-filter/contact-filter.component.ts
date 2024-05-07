import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { ContactFilter } from '../../models/contact.filter';

@Component({
    selector: 'contact-filter',
    templateUrl: './contact-filter.component.html',
    styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {

    contactFilter!: ContactFilter
    subscription!: Subscription

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
        this.subscription = this.contactService.filterBy$.subscribe(contactFilter => {
            this.contactFilter = contactFilter
        })
    }

    onSetFilter() {
        this.contactService.setFilter({ ...this.contactFilter })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

}
