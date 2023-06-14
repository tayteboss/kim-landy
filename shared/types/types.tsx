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
		transition: {
			duration: number;
		}
	}
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number
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
};

export type ContentColumnProps = {
	title: string;
	richText: {
		about?: {};
		clients?: {};
	}
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

export type PhotographyProject = {
	category?: string;
	date?: string;
	gallery?: [];
	heroImage?: {
		url?: string;
	};
	information?: {};
	slug?: string;
	title?: string;
	thumbnail?: [];
	galleryLength?: number;
	setIsHovered: (value: boolean) => void;
};
