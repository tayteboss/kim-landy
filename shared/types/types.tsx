export type MediaType = {
	media: [
		{
			webmVideoFile: {
				url: string;
			};
			mp4VideoFile: {
				url: string;
			};
			placeholderImage: {
				url: string;
			}
		}
	];
};

export type Transitions = {
	hidden: {
		opacity: number;
		filter?: string;
		transition: {
			duration: number;
			delay?: number;
		}
	}
	visible: {
		opacity: number;
		filter?: string;
		transition: {
			duration: number;
			delay?: number;
		}
	}
};

export type SiteData ={
	seoDescription: string;
	phone: string;
	instagramUrl: string;
	instagramHandle: string;
	email: string;
	address: string;
	acknowledgementOfCountry: string;
}

export type StyledProps = {
	$isActive?: boolean;
	$isHovered?: boolean;
	$isTop?: boolean;
	$isFooterType?: boolean;
	$isThumbnailGalleryActive?: boolean;
	$marginBottom?: string;
	$transformData?: string;
	$isChangingPage?: boolean;
};

export type ContentColumnProps = {
	title: string;
	richText: {
		about?: {} | undefined;
		clients?: {} | undefined;
		credits?: {} | undefined;
	} | undefined
}

export type FeaturedProjects = {
	key?: number;
	slug: string;
	title: string;
	information?: {};
	excerpt?: string;
	_modelApiKey?: string;
}

export type FeaturedHomeImagesType = {
	image: {
		url: string;
	}
}

type ThumbnailType = {
	image: {
		url: string;
	}
}

export type PhotographyProductionProject = {
	category?: string;
	date?: string;
	gallery?: [];
	heroImage?: {
		url?: string;
	};
	information?: {};
	slug?: string;
	title?: string;
	thumbnail?: ThumbnailType[] | undefined;
	galleryLength?: number;
	thumbnailImage?: {
		url?: string;
	};
	thumbnailVideoSnippet?: {
		url?: string;
	};
	fullVideoExternalLink?: string;
	isProduction?: boolean;
	credits?: {};
	setIsHovered: (value: boolean) => void;
};

export type WrittenProject = {
	excerpt?: string;
	link?: string;
	slug?: string;
	title?: string;
	setIsHovered: (value: boolean) => void;
};

export type WrittenProjectData = WrittenProject[];
