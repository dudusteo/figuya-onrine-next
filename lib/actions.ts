import { createCustomerMutation, getCustomerQuery } from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";

const apiUrl = isProduction
	? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ""
	: "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
	? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ""
	: "letmein";
const serverUrl = isProduction
	? process.env.NEXT_PUBLIC_SEVER_URL
	: "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
	try {
		return await client.request(query, variables);
	} catch (error) {
		throw error;
	}
};

export const getCustomer = (email: string) => {
	client.setHeader("x-api-key", apiKey);
	return makeGraphQLRequest(getCustomerQuery, { email });
};

export const createCustomer = (
	firstName: string,
	lastName: string,
	email: string,
	avatarUrl: string
) => {
	client.setHeader("x-api-key", apiKey);
	const variables = {
		input: {
			firstName,
			lastName,
			email,
			avatarUrl,
		},
	};

	return makeGraphQLRequest(createCustomerMutation, variables);
};
