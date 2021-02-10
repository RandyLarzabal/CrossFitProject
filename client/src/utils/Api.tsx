import axios, { AxiosResponse } from "axios";
const headers = {
    headers: {
        "Content-Type": "application/json",
        Authorization:
            "Basic Y2tfZTllMzMxNGViYmI0MDNlMTU0NTkyYWFkOWZmMjQ2ZTMzMmY1NWRhZjpjc183YzY1ZWI2NjgyODk1NTM3ZmE4MDJkOThmM2RmMDdmZTdmYjcxMDVj",
    },
};
const burl = "https://crossfit.antoinebrinkmans.fr/wp-json/wc/v3/";

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
};
