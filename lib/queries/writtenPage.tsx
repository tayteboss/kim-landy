import { imageFragment } from "./fragments";

const WRITTEN_PAGE_QUERY: string = `
	query Query {
		allWrittenProjects(first: 100) {
			slug
			title
			thumbnailImage {
				${imageFragment}
			}
			link
			excerpt
		}
	}
`;

export default WRITTEN_PAGE_QUERY;