import { GraphQLClient } from 'graphql-request';
import HOME_PAGE_QUERY from './queries/homePage';
import PHOTOGRAPHY_PAGE_QUERY from './queries/photographyPage';
import SINGLE_PHOTOGRAPHY_PROJECT_QUERY from './queries/singlePhotographyProject';
import WRITTEN_PAGE_QUERY from './queries/writtenPage';
import PRODUCTION_PAGE_QUERY from './queries/productionPage';
import SINGLE_PRODUCTION_PROJECT_QUERY from './queries/singleProductionProject';
import SITE_QUERY from './queries/siteData';
import NEXT_PROJECT_QUERY from './queries/nextProject';

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

export const getAllPhotography = async () => {
	const data = await request({
		query: PHOTOGRAPHY_PAGE_QUERY
	});

	return data?.allPhotographyProjects;
};

export async function getPhotographyProject(slug: string) {
	const data = await request({
		query: SINGLE_PHOTOGRAPHY_PROJECT_QUERY,
		variables: { slug },
	});

	return data?.photographyProject;
}

export const getAllWritten = async () => {
	const data = await request({
		query: WRITTEN_PAGE_QUERY
	});
	
	return data?.allWrittenProjects;
};


export const getAllProduction = async () => {
	const data = await request({
		query: PRODUCTION_PAGE_QUERY
	});

	return data?.allProductionProjects;
};

export async function getProductionProject(slug: string) {
	const data = await request({
		query: SINGLE_PRODUCTION_PROJECT_QUERY,
		variables: { slug },
	});

	return data?.productionProject;
}

export async function getNextProject(currentProjectId: string) {
	const data = await request({
		query: NEXT_PROJECT_QUERY,
		variables: { currentProjectId },
	});

	return data?.allPhotographyProjects[0];
}