import { imageFragment, richTextFragment, videoFragment } from "./fragments";

const PRODUCTION_PAGE_QUERY: string = `
	query Query {
		allProductionProjects(first: 100) {
			slug
			title
			information {
				${richTextFragment}
			}
			thumbnailVideoSnippet {
				${videoFragment}
			}
			thumbnailImage {
				${imageFragment}
			}
		}
	}
`;

export default PRODUCTION_PAGE_QUERY;