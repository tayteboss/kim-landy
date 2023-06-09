const SITE_DATA_QUERY: string = `
	query Query {
		siteInformation {
			seoDescription
			phone
			instagramUrl
			instagramHandle
			email
			address
			acknowledgementOfCountry
		}
	}
`;

export default SITE_DATA_QUERY;
