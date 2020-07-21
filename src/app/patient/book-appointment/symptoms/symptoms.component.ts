import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


export class Symptoms{
  symptom:string;
  severity:string;
}

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})

export class SymptomsComponent implements OnInit {

  constructor(private router: Router) { }
  severities: string[] = ["MILD", "MODERATE", "SEVERE"];
  symptoms:Symptoms[]=[]
  symptomFormGroup = new FormGroup({
        symptom: new FormControl("", [Validators.required]),
        severity: new FormControl("", [Validators.required]),
    });
  ngOnInit(): void {
  }
  Add(){
   this.symptoms.push({
    symptom:this.symptomFormGroup.get("symptom").value,
    severity:this.symptomFormGroup.get("severity").value
   })
  }

}
