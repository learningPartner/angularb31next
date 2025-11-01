import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-tem-contaoner',
  imports: [NgIf, NgFor, NgTemplateOutlet],
  templateUrl: './ng-tem-contaoner.html',
  styleUrl: './ng-tem-contaoner.css',
})
export class NgTemContaoner {
  isContentVisiable: boolean = false;

  cityList: string[]= [];
  studList: any []= [];
}
