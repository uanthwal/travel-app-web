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
    
    get_hotspots(data) {
        return this.http.post(URL_CONFIG.BASE_URL  + URL_CONFIG.GET_HOTSPOTS, data);
    }

    getUserInfoBySession(data) {
        return this.http.post(URL_CONFIG.BASE_URL  + URL_CONFIG.SEARCH_URL, data);
    }

    searchTravelOptions(data) {
        return this.http.post(URL_CONFIG.BASE_URL  + URL_CONFIG.GET_TRAVEL_MODES, data);
    }

    getAllProvinces() {
        return this.http.post(URL_CONFIG.BASE_URL  + URL_CONFIG.GET_ALL_PROVINCES, {});
    }

    bookTicket(data) {
        return this.http.post(URL_CONFIG.BASE_URL  + URL_CONFIG.BOOK_TICKET, data);
    }

    getBookingById(data) {
        return this.http.post(URL_CONFIG.BASE_URL  + URL_CONFIG.GET_BOOKING_BY_ID, data);
    }

    generateTicket(data) {
        return this.http.post(URL_CONFIG.BASE_URL  + URL_CONFIG.GENERATE_TICKET, data);
    }
    
}