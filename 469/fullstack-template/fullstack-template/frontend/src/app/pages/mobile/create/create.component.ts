import { Component, OnInit, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'ami-fullstack-create',
  templateUrl: './create.component.html',
  template: `
              <head>Create Game</head>
              <body>
            <h2>
              Total Players
            </h2>
            </body>
          `,
  styleUrls: ['./create.component.scss']
})


export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
