import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  expanded = false;
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  myFunction(event) {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById('header-container').className = 'stuck';
    } else {
      document.getElementById('header-container').className = '';
    }
  }

  ngOnInit() {
  }

  toggleNav() {
    this.expanded = !this.expanded;
  }
}
