import { AuthenticationService } from './../../authentication-service.service';
import { UserService } from './../../user-service.service';
import { AlertService } from './../../alert-service.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators, } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {
  genderList: string[] = ['Male', 'Female', 'Other'];
  loading = false;
    submitted = false;
  patientRegister = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    dateOfBirth: new FormControl(moment(), [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.minLength(10), Validators.min(1000000000), Validators.max(9999999999)]),
    emailId: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    retypePassword: new FormControl('', [Validators.required, Validators.pattern('')])
  });
  minDob = moment((moment().startOf('day').unix() * 1000) - (101 * 365 * 86400 * 1000));
  maxDob = moment().startOf('day');
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
     }

  ngOnInit(): void {
    this.patientRegister.get('retypePassword').valueChanges.subscribe((password) => {
      if (this.patientRegister.get('password').value !== password){
        this.patientRegister.get('retypePassword').setErrors(Validators.pattern);
      }
    });
  }
  get f() { return this.patientRegister.controls; }


  register(){
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();
        if (this.patientRegister.invalid) {
          return;
      }
      this.loading = true;
        this.userService.register(this.patientRegister.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

  
}
