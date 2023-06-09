import { imageFragment, richTextFragment, videoFragment } from "./fragments";

const PRODUCTION_PAGE_QUERY: string = `
	query Query {
		allProductionProjects {
			slug
			title
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