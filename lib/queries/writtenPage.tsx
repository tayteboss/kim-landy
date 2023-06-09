import { imageFragment } from "./fragments";

const WRITTEN_PAGE_QUERY: string = `
	query Query {
		allWrittenProjects {
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