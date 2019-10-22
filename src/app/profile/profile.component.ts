import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  constructor(private api: APIService, private router: Router) {}

  ngOnInit() {
    Auth.currentAuthenticatedUser({
        bypassCache: false
      }).then(async user => {
      })
      .catch(err => console.log(err));
  }
  logOut() {
    Auth.signOut({ global: true })
    .then(data => {
      this.router.navigate(['/auth']);
    })
    .catch(err => console.log(err));
  }
}

//   async updateProfile() {
//     };
//     console.log(user.firstName);
//     await this.api.CreateUser(user);
//   }
// }
