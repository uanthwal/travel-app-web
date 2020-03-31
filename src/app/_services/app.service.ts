import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
  constructor() {}

  isUserLoggedIn() {
    if (JSON.parse(localStorage.getItem("session_id")) != null && JSON.parse(localStorage.getItem('isUserLoggedIn'))) return true;
    return false;
  }

  isLoginInProcess() {
    let isLoginInProcess = JSON.parse(localStorage.getItem("isLoginInProcess"));
    if (null != isLoginInProcess && isLoginInProcess) return true;
    return false;
  }

  setLoginInProcess() {
    localStorage.setItem("isLoginInProcess", JSON.stringify(true));
  }

  removeLoginInProcess() {
    localStorage.setItem("isLoginInProcess", JSON.stringify(false));
  }
}
