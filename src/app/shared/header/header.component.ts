import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  valueToFind = '';
  constructor(private route: Router) { }

  ngOnInit() {
  }

  search() {
    if (this.valueToFind.valueOf != null && this.valueToFind.length >= 1) {
      this.route.navigate(['/result', this.valueToFind]);
    }
  }
  returnHome() {
    this.valueToFind = '';
    this.route.navigate(['/home']);
  }
}
