import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(private router: Router) { }

  createAccount() {
    this.router.navigateByUrl("/register");
  }


  ngOnInit() {
  }

}
