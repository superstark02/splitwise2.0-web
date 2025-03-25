import { getApiClient, postApiClient } from "../../api/ApiClient.ts";
import { ADD_EXPENSE, GET_CONEECTIONS, userId } from "../../api/Urls.ts";

export const getConnections = async () => {
    const response = await getApiClient(GET_CONEECTIONS(userId));
    return response;
}

export const addExpense = async () => {
    const response = await postApiClient(ADD_EXPENSE);
    return response;
}
