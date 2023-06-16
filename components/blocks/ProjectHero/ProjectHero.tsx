import Image from 'next/image';
import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';

const ProjectHeroWrapper = styled(motion.section)`
	.layout-wrapper {
		width: 100%;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: calc(100vh - 50px);
	height: calc(100dvh - 50px);
	overflow: hidden;
`;

const ImageInnerWrapper = styled(motion.div)`
	position: relative;
	height: 100%;
	width: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		img,
		video {
			filter: brightness(0.75);
		}
	}
`;

const Video = styled.video`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

const ContentWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	color: var(--colour-white);
	mix-blend-mode: difference;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		mix-blend-mode: normal;
	}
`;

const Title = styled.h1`
	grid-column: 2 / span 2;
	color: var(--colour-white);
	text-align: right;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		text-align: left;
		grid-column: 1 / -1;
	}
`;

const ContentInnerWrapper = styled.div`
	grid-column: 4 / span 3;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 3 / 6;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
	}
`;

const Date = styled.p`
	color: var(--colour-white);
`;

const Category = styled.p`
	color: var(--colour-white);
`;

const LinkTag = styled.a`
	color: var(--colour-white);
	margin-top: ${pxToRem(24)};
	display: inline-block;
	text-decoration: none;
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-left: ${pxToRem(14)};
	}

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: -12px;
		width: 8px;
		height: 8px;
		background-image: url('/icons/play.svg');
		background-size: contain;
		background-repeat: no-repeat;
	}
`;

type Props = {
	image: string | undefined;
	title: string | undefined;
	date: string | undefined;
	category: string | undefined;
	isProduction?: boolean;
	thumbnailImage?: {
		url?: string;
	};
	thumbnailVideoSnippet?: {
		url?: string;
	};
	fullVideoExternalLink?: string;
};

const ProjectHero = (props: Props) => {
	const {
		image,
		title,
		date,
		category,
		isProduction,
		thumbnailImage,
		thumbnailVideoSnippet,
		fullVideoExternalLink
	} = props;

	const [viewportHeight, setViewportHeight] = useState(0);

	const { scrollY } = useScroll();
	const filter = useTransform(scrollY, [0, viewportHeight], ['blur(0px) brightness(1)', 'blur(3px) brightness(0.75)']);
	const translateY = useTransform(scrollY, [0, viewportHeight], [0, 300]);
	const transform = useTransform(scrollY, [0, viewportHeight], ['scale(1)', 'scale(1.15)']);

	useEffect(() => {
		setViewportHeight(window.innerHeight);
		window.addEventListener('resize', () => {
			setViewportHeight(window.innerHeight);
		});
	}, []);

	return (
		<ProjectHeroWrapper
			style={{
				filter,
				y: translateY,
			}}
		>
			<ImageWrapper>
				<ImageInnerWrapper
					style={{
						transform,
					}}
				>
					{!isProduction ? (
						image && (
							<Image
								src={image}
								layout="fill"
								objectFit="cover"
								priority={true}
							/>
						)
					) : (
						thumbnailVideoSnippet?.url && (
							<Video
								autoPlay
								muted
								playsInline
								loop
								preload="auto"
								poster={thumbnailImage?.url}
							>
								<source src={thumbnailVideoSnippet.url} type="video/mp4" />
							</Video>
						)
					)}
				</ImageInnerWrapper>
				<ContentWrapper>
					<LayoutWrapper>
						<LayoutGrid>
							{title && (
								<Title className="column-block-style__title">{title}</Title>
							)}
							<ContentInnerWrapper className="column-grid-style">
								{date && (
									<Date>{date}</Date>
								)}
								{category && (
									<Category>{category}</Category>
								)}
								{isProduction && (
									<LinkTag
										href={fullVideoExternalLink}
										target="_blank"
									>
										Watch video
									</LinkTag>
								)}
							</ContentInnerWrapper>
						</LayoutGrid>
					</LayoutWrapper>
				</ContentWrapper>
			</ImageWrapper>
		</ProjectHeroWrapper>
	);
};

export default ProjectHero;
