import { imageFragment, richTextFragment } from "./fragments";

const PHOTOGRAPHY_PAGE_QUERY: string = `
	query Query {
		allPhotographyProjects(first: 100) {
			slug
			title
			thumbnail {
				image {
					${imageFragment}
				}
				use46Ratio
			}
			thumbnailsUse46Ratio
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
				use46Ratio
			}
			date
			category
		}
	}
`;

export default PHOTOGRAPHY_PAGE_QUERY;