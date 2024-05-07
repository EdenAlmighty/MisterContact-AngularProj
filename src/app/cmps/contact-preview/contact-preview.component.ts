import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {

  @Input() contact!: Contact
  @Output() onRemove = new EventEmitter<string>()
  constructor() { }

  faUser = faUser
  faEdit = faPenToSquare
}
