import { Component, OnInit } from '@angular/core'
import { Observable, switchMap } from 'rxjs'
import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'
import { BitcoinService } from '../../services/bitcoin.service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  user$: Observable<User> = this.userService.loggedInUser$
  BTC$: Observable<string> = this.user$.pipe(
    switchMap(user => this.bitcoinService.getRateStream(user.coins))
  )
  constructor(private userService: UserService,
    private bitcoinService: BitcoinService
  ) { }


}

