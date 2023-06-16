import { imageFragment, richTextFragment } from "./fragments";

const ABOUT_CONTACT_PAGE_QUERY: string = `
	query Query {
		aboutContactPage {
			about {
				${richTextFragment}
			}
			image {
				${imageFragment}
			}
		}
	}
`;

export default ABOUT_CONTACT_PAGE_QUERY;