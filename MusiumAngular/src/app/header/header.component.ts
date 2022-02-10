import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null> = of(null);
  isAdmin: boolean = false;
  user!: User | null;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this.user$ = this._auth.user$;
    this.user$.subscribe(u => {
      this.user = u;
      if (this.user?.role == 1) {
        this.isAdmin = true;
      }
    });
  }
  
}
