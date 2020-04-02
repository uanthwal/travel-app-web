let protocol = location.protocol + "//" + location.host;

export var APP_CONFIG = {
    ADMIN_ICON: getConfigs()["ADMIN_ICON"]
};

export var URL_CONFIG = {
    BASE_URL: getConfigs()["BASE_URL"],
    LOGIN_URL: ":3000/login",
    REGISTER_URL: ":3000/register",
    VERIFY_OTP : ":3000/verify-otp",
    SEARCH_URL:":3001/api/search",
    GET_TRAVEL_MODES:":3002/api/modes",
    GET_ALL_PROVINCES:":3002/api/get-all-provinces",
    GET_BOOKING_BY_ID: ':3002/api/get-booking-by-id',
    GET_USER_INFO_BY_SESSION: ':3000/api/get-user-info-by-session',
    BOOK_TICKET: ':3002/api/book-ticket',
    GET_HOTSPOTS:':3001/get-hotspots',
    GENERATE_TICKET:':3002/api/generate-ticket'
};

export function getConfigs() {
    if (protocol == "http://localhost:4200") {
        return {
            BASE_URL: "http://travel-canada-elb-1597027388.us-east-1.elb.amazonaws.com",
            ADMIN_ICON: "../assets/admin.png"
        };
    } else {
        return {
            BASE_URL: "http://travel-canada-elb-1597027388.us-east-1.elb.amazonaws.com",
            ADMIN_ICON: "../assets/admin.png"
        };
    }
}