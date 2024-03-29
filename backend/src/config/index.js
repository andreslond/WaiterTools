if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

module.exports = {
    PORT: process.env.PORT,
    EXT_API_URL: process.env.EXT_API_URL,
    EXT_AUTH_PATH: process.env.EXT_AUTH_PATH,
    EXT_REPORTS_PATH: process.env.EXT_REPORTS_PATH,
    EXT_USER_PATH: process.env.EXT_USER_PATH,
    EXT_MENU_PATH: process.env.EXT_MENU_PATH,
    AUTH_PATH: process.env.AUTH_PATH,
    REPORTS_PATH: process.env.REPORTS_PATH,
    CALLCENTER_REPORT_PATH: process.env.CALLCENTER_REPORT_PATH,
    CALLCENTER_DELIVERY_PATH: process.env.CALLCENTER_DELIVERY_PATH,
    SHAKES_REPORT_PATH: process.env.SHAKES_REPORT_PATH,
    SHAKE_CATEGORIE_NAME: process.env.SHAKE_CATEGORIE_NAME,
    USER_PATH: process.env.USER_PATH,
    MENU_PATH: process.env.MENU_PATH,
    GOOGLE_TOKEN_PATH: process.env.GOOGLE_TOKEN_PATH,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
    WHATSAPP_API_CODE: process.env.WHATSAPP_API_CODE,
    WHATSAPP_API_KEY: process.env.WHATSAPP_API_KEY,
};
