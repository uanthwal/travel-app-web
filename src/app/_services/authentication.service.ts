import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_CONFIG } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(URL_CONFIG.BASE_URL  + URL_CONFIG.LOGIN_URL, { email: email, password: password })
            .pipe(map(response => {
                if(response.code == 200) {
                    localStorage.setItem('currentUser', JSON.stringify(email));
                }
                return response;
            }));
    }

    verifyOtp(otp: string) {
        return this.http.post<any>(URL_CONFIG.BASE_URL  + URL_CONFIG.VERIFY_OTP, { email:JSON.parse(localStorage.getItem('currentUser')) ,otp: otp })
            .pipe(map(response => {
                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
    }
}