export const richTextFragment = `
	blocks
	links
	value
`;

export const linkFragment = `
	useInternalLink
	internalLink {
		... on HomePageRecord {
			slug
		}
		... on PageRecord {
			slug
		}
	}
	externalLink
	linkTitle
`;

export const imageFragment = `
	url
	alt
	height
	width
	alt
`;

export const videoFragment = `
	url
`;

export const mediaFragment = `
	image {
		url
		alt
		height
		width
		alt
	}
	video {
		url
	}
`;
