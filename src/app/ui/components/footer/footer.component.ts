import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
      <div class="navbar-text m-auto text-white">
        Copyright &copy; 2018
      </div>
    </nav>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
