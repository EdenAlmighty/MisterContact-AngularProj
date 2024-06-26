import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[] | null = null
  @Output() onRemove = new EventEmitter<string>()

  ngOnInit(): void {
    // console.log(this.contacts);
  }
}
