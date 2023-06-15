import { imageFragment, richTextFragment } from "./fragments";

const SINGLE_PHOTOGRAPHY_PROJECT_QUERY: string = `
	query Query($slug: String) {
		photographyProject(filter: {slug: {eq: $slug}}) {
			id
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

export default SINGLE_PHOTOGRAPHY_PROJECT_QUERY;
