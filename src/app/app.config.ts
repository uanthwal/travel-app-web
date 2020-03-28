let protocol = location.protocol + "//" + location.host;

export var APP_CONFIG = {
    ADMIN_ICON: getConfigs()["ADMIN_ICON"]
};

export var URL_CONFIG = {
    BASE_URL: getConfigs()["BASE_URL"],
    LOGIN_URL: "/login",
    REGISTER_URL: "/register",
    VERIFY_OTP : "/verify-otp",
    SEARCH_URL:"/search",
    GET_TRAVEL_MODES:"/modes",
    GET_ALL_PROVINCES:"/get-all-provinces",
    GET_BOOKING_BY_ID: '/get-booking-by-id'
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