import { imageFragment, richTextFragment, videoFragment } from "./fragments";

const SINGLE_PRODUCTION_PROJECT_QUERY: string = `
	query Query($slug: String) {
		productionProject(filter: {slug: {eq: $slug}}) {
			slug
			title
			thumbnailVideoSnippet {
				${videoFragment}
			}
			thumbnailImage {
				${imageFragment}
			}
			information {
				${richTextFragment}
			}
			heroVideoSnippet {
				${videoFragment}
			}
			heroImage {
				${imageFragment}
			}
			fullVideoExternalLink
			date
			credits {
				${richTextFragment}
			}
			category
		}
	}
`;

export default SINGLE_PRODUCTION_PROJECT_QUERY;
