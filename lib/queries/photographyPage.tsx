import { imageFragment, richTextFragment } from "./fragments";

const PHOTOGRAPHY_PAGE_QUERY: string = `
	query Query {
		allPhotographyProjects {
			slug
			title
			thumbnail {
				image {
					${imageFragment}
				}
			}
			information {
				${richTextFragment}
			}
			heroImage {
				${imageFragment}
			}
			gallery {
				image {
					${imageFragment}
				}
			}
			date
			category
		}
	}
`;

export default PHOTOGRAPHY_PAGE_QUERY;