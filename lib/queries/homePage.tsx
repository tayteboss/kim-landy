import { richTextFragment } from "./fragments";

const ALL_PAGES_QUERY: string = `
	query Query {
		homePage {
			about {
				${richTextFragment}
			}
			clients {
				${richTextFragment}
			}
		}
	}
`;

export default ALL_PAGES_QUERY;