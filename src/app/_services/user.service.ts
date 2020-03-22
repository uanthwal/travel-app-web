import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import {URL_CONFIG} from '../app.config';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post<any>(URL_CONFIG.BASE_URL  + URL_CONFIG.REGISTER_URL, user);
    }

    search(data) {
        return this.http.post(URL_CONFIG.BASE_URL  + URL_CONFIG.SEARCH_URL, data);
    }

    
}