import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import Image from 'next/image';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const ProjectGalleryWrapper = styled.div`
	margin-bottom: ${pxToRem(240)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(120)};
	}

	.grid {
		row-gap: ${pxToRem(120)};

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			row-gap: ${pxToRem(80)};
		}
	}

	.image-wrapper {
		&:nth-child(6n + 1) {
			grid-column: 1 / span 7;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(6n + 2) {
			grid-column: 4 / span 10;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 3 / -1;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 2 / -1;
			}
		}

		&:nth-child(6n + 3) {
			grid-column: 1 / span 4;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / 5;
			}
		}

		&:nth-child(6n + 4) {
			grid-column: 6 / span 8;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 2 / 5;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(6n + 5) {
			grid-column: 4 / span 7;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 2 / -1;
			}
		}

		&:nth-child(6n + 6) {
			grid-column: 1 / -1;
		}
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	padding-top: 80%;
`;

type ImageItem = {
	image: {
		url: string;
	};
};

type Props = {
images: ImageItem[] | undefined;
};

const ProjectGalleryCard = ({ image }: { image: string | undefined }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ImageWrapper
			ref={ref}
			className={`image-wrapper view-element-scale-up ${
				inView ? 'view-element-scale-up--in-view' : ''
			}`}
		>
			{image && (
				<Image src={image} layout="fill" objectFit="cover" />
			)}
		</ImageWrapper>
	);
};

const ProjectGallery = ({ images }: Props) => {
	const hasImages = images && images.length >= 0;

	return (
		<ProjectGalleryWrapper>
			<LayoutWrapper>
				<LayoutGrid>
					{hasImages && images.map((item, i) => (
						<ProjectGalleryCard image={item?.image?.url} />
					))}
				</LayoutGrid>
			</LayoutWrapper>
		</ProjectGalleryWrapper>
	);
};

export default ProjectGallery;
