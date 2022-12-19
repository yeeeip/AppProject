import axios from "axios";

const API_URL = 'https://7555-176-59-122-160.eu.ngrok.io'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "1",
  },
});

// api.interceptors.request.use((config) => {
//   if (process.browser && config) {
    // const cookies = parseCookies(null);
    // const token = cookies[ACCESS_TOKEN];

    // if (token) config.headers!.Authorization = Bearer ${token};
    // const locale = cookies.NEXT_LOCALE;
    // config.params = {
    //   lang: locale ? locale : DEFAULT_LOCALE,
    //   ...config.params,
    // };
//   }

//   return config;
// });

export default api;