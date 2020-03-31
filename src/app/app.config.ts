let protocol = location.protocol + "//" + location.host;

export var APP_CONFIG = {
    ADMIN_ICON: getConfigs()["ADMIN_ICON"]
};

export var URL_CONFIG = {
    BASE_URL: getConfigs()["BASE_URL"],
    LOGIN_URL: "/login",
    REGISTER_URL: "/register",
    VERIFY_OTP : "/verify-otp",
    SEARCH_URL:"/api/search",
    GET_TRAVEL_MODES:"/api/modes",
    GET_ALL_PROVINCES:"/api/get-all-provinces",
    GET_BOOKING_BY_ID: '/api/get-booking-by-id',
    GET_USER_INFO_BY_SESSION: '/api/get-user-info-by-session',
    BOOK_TICKET: '/api/book-ticket',
};

export function getConfigs() {
    if (protocol == "http://localhost:4100") {
        return {
            BASE_URL: "https://cloud-5409.herokuapp.com",
            ADMIN_ICON: "../assets/admin.png"
        };
    } else {
        return {
            BASE_URL: "http://localhost:3000",
            ADMIN_ICON: "../assets/admin.png"
        };
    }
}