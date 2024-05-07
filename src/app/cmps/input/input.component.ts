import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../../services/contact.service';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { ContactFilter } from '../../models/contact.filter';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit, OnDestroy {
  private contactService = inject(ContactService)
  private filterSubject$ = new Subject()
  private destroySubject$ = new Subject()
  filterBy!: ContactFilter

  ngOnInit(): void {
      this.contactService.filterBy$
          .pipe(takeUntil(this.destroySubject$))
          .subscribe(filterBy => {
              this.filterBy = filterBy
          })


      this.filterSubject$
          .pipe(
              debounceTime(500),
              distinctUntilChanged(),
              takeUntil(this.destroySubject$)
          )
          .subscribe(() => {
              console.log('send to service');
              this.contactService.setFilter(this.filterBy)
          })
  }


  onSetFilter(term: string) {
      this.filterSubject$.next(term)
  }

  ngOnDestroy(): void {
      this.destroySubject$.next(null)
      this.destroySubject$.complete()
  }

  faSearch = faMagnifyingGlass
}
