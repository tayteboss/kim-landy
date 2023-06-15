import { imageFragment } from "./fragments";

const NEXT_PROJECT_QUERY: string = `
	query Query($currentProjectId: ItemId) {
		allPhotographyProjects(filter: { id: { neq: $currentProjectId } }, first: 1) {
			id
			slug
			title
			thumbnail {
				image {
					${imageFragment}
				}
			}
			heroImage {
				${imageFragment}
			}
		}
	}
`;

export default NEXT_PROJECT_QUERY;