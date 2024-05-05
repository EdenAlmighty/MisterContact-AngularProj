import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'
import { BitcoinService } from '../../services/bitcoin.service'

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    user!: User
    BTC$!: Observable<string>

    constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

    ngOnInit(): void {
        this.user = this.userService.getUser()
        this.BTC$ = this.bitcoinService.getRate(this.user.coins)
    }
}

