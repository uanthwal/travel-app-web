let protocol = location.protocol + "//" + location.host;

export var APP_CONFIG = {
    ADMIN_ICON: getConfigs()["ADMIN_ICON"]
};

export var URL_CONFIG = {
    BASE_URL: getConfigs()["BASE_URL"],
    LOGIN_URL: "/login",
    REGISTER_URL: "/register",
    VERIFY_OTP : "/verify-otp"
};

export function getConfigs() {
    if (protocol == "http://localhost:4200") {
        return {
            BASE_URL: "https://cloud-5409.herokuapp.com",
            ADMIN_ICON: "../assets/admin.png"
        };
    } else {
        return {
            BASE_URL: protocol,
            ADMIN_ICON: "../assets/admin.png"
        };
    }
}