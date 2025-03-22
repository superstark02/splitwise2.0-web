import { Friend } from "./Friends"

export type UserData = {
    debt: number;
    name: string;
    photo: string;
    spent: number;
    user_id: string;
}

export type InitialData = {
    connections: Array<Friend>;
    userData: UserData;
}