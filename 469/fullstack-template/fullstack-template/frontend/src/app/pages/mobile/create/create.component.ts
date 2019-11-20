import { Component, OnInit, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'ami-fullstack-create',
  templateUrl: './create.component.html',
  template: `
            <div class="ad-banner-example">
              <head>Create Game</head>
              <ng-template  ami-fullstack-create,
              ></ng-template>
            </div>
            <h2>
              Total Players
            </h2>
          `,
  styleUrls: ['./create.component.scss']
})


export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
