import { GraphQLClient } from 'graphql-request';
import HOME_PAGE_QUERY from './queries/homePage';
import SITE_QUERY from './queries/siteData';

type Request = {
	query: string;
	variables?: {};
	preview?: boolean;
};

const request = ({ query, variables, preview }: Request) => {
	const endpoint = preview
		? `https://graphql.datocms.com/preview`
		: `https://graphql.datocms.com/`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
		},
	});
	return client.request(query, variables);
};

export const getSiteData = async () => {
	const data = await request({
		query: SITE_QUERY,
	});

	return data?.siteInformation;
};

export const getHomePage = async () => {
	const data = await request({
		query: HOME_PAGE_QUERY
	});

	return data?.homePage;
};
