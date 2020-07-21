import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientRegistrationComponent } from './patient-registration/patient-registration/patient-registration.component';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<PatientRegistrationComponent[]>(`/PatientRegistrationComponent`);
    }

    register(user: PatientRegistrationComponent) {
        return this.http.post(`/PatientRegistrationComponent/register`, user);
    }

    
}