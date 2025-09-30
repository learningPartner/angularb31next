import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-selection',
  imports: [],
  templateUrl: './plan-selection.html',
  styleUrl: './plan-selection.css'
})
export class PlanSelection {

  SelectedPlan:string = "";

  selectPlanObj: any;

  planList: any []= [
    {id:121,planName:'Mobile',icon:'',details:''},
    {id:122,planName:'Fibre',icon:'',details:''},
    {id:123,planName:'Bsuiness',icon:'',details:''},
     {id:121,planName:'Mobile',icon:'',details:''},
    {id:122,planName:'Fibre',icon:'',details:''},
    {id:123,planName:'Bsuiness',icon:'',details:''},
     {id:121,planName:'Mobile',icon:'',details:''},
    {id:122,planName:'Fibre',icon:'',details:''},
    {id:123,planName:'Bsuiness',icon:'',details:''}
  ];

  onPlanSeldction(palnName: string) {
    this.SelectedPlan =  palnName;
  }
   onPlanSelect(planData: any) {
    this.selectPlanObj =  planData; 
  }

}
