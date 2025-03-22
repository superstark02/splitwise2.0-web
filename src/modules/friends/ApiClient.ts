import { getApiClient } from "../../api/ApiClient.ts";
import { GET_INITIAL_DATA, userId } from "../../api/Urls.ts";

export const getInitialData = async () => {
    const response = await getApiClient(GET_INITIAL_DATA(userId));
    return response;
}
