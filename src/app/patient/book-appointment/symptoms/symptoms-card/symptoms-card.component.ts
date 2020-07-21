import { Symptoms } from './../symptoms.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-symptoms-card',
  templateUrl: './symptoms-card.component.html',
  styleUrls: ['./symptoms-card.component.scss']
})
export class SymptomsCardComponent implements OnInit {
  @Input() symptom:Symptoms;
  constructor() { }

  ngOnInit(): void {
    console.log("sympt",this.symptom);
  }

}
