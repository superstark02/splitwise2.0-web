import { getApiClient } from "../../api/ApiClient.ts";
import { GET_CONEECTIONS, userId } from "../../api/Urls.ts";

export const getConnections = async () => {
    const response = await getApiClient(GET_CONEECTIONS(userId));
    return response;
}
