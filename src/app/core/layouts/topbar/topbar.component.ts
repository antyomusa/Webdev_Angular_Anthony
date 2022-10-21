import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  submitHome() {
    this.router.navigate(["home"]);
  }

  submitJobList() {
    this.router.navigate(["job-list"]);
  }

  submitProfile() {
    this.router.navigate(["profile"]);
  }

  submitJobUpdate() {
    this.router.navigate(["job-update"]);
  }

}
