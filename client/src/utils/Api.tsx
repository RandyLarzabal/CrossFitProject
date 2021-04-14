import axios, { AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

const headers = {
    headers: {
        "Content-Type": "application/json",
        Authorization:
            "Basic Y2tfZTllMzMxNGViYmI0MDNlMTU0NTkyYWFkOWZmMjQ2ZTMzMmY1NWRhZjpjc183YzY1ZWI2NjgyODk1NTM3ZmE4MDJkOThmM2RmMDdmZTdmYjcxMDVj",
    },
};
const burl = "https://crossfit.antoinebrinkmans.fr/wp-json/wc/v3/";
const ck = "ck_e2970878270d8ad4fb36a3680fb9600e23d9e8a4";
const cs = "cs_f2be61514d51ce18bd665043befdd02486bbeefb";
export default {
    getNouveaute: async (category: string, per_page: number): Promise<AxiosResponse<any>> => {
        const config = {
            headers,
            params: {
                per_page: per_page,
                category: category,
            },
        };
        return await axios.get(`${burl}products`, config);
    },
    getProduct: async (
        category: string,
        per_page: number,
        min_price?: number,
        max_price?: number
    ): Promise<AxiosResponse<any>> => {
        const config = {
            headers,
            params: {
                per_page: per_page,
                category: category,
                min_price: min_price,
                max_price: max_price,
            },
        };
        return await axios.get(`${burl}products`, config);
    },
};
