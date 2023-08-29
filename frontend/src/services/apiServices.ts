import axios, { AxiosResponse } from "axios";
import { API_KEY, BASE_URL } from "@env";

export const CategoryAPIService = async (): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/categories?api_key=${API_KEY}`)
        return response.data
    } catch (error) {
        throw new Error("API Error:" + error)
    }
}
