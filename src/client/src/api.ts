import { gql } from "apollo-boost";

export enum API {
    LOGIN = "LOGIN",
}

interface Login {
    kind: API.LOGIN;
    query: `query Login { username @client }`;
}

export const login: Login = {
    kind: API.LOGIN,
    query: `query Login { username @client }`
}
