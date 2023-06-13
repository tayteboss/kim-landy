import { imageFragment, richTextFragment } from "./fragments";

const ALL_PAGES_QUERY: string = `
	query Query {
		homePage {
			about {
				${richTextFragment}
			}
			clients {
				${richTextFragment}
			}
			featuredProjects {
				... on ProductionProjectRecord {
					_modelApiKey
					slug
					title
					information {
						${richTextFragment}
					}
				}
				... on PhotographyProjectRecord {
					_modelApiKey
					slug
					title
					information {
						${richTextFragment}
					}
				}
				... on WrittenProjectRecord {
					_modelApiKey
					slug
					title
					excerpt
				}
			}
			featuredImages {
				image {
					${imageFragment}
				}
			}
		}
	}
`;

export default ALL_PAGES_QUERY;