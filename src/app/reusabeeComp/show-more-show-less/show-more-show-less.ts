import { SlicePipe } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-show-more-show-less',
  imports: [SlicePipe],
  templateUrl: './show-more-show-less.html',
  styleUrl: './show-more-show-less.css'
})
export class ShowMoreShowLess {

  @Input() textMessage = ""; 
  @Input() charCount: number = 0;


  isShowMore= false;
}
