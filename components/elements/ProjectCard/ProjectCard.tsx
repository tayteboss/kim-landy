import styled from 'styled-components';
import { PhotographyProductionProject, StyledProps, ThumbnailType } from '../../../shared/types/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ProjectCardPagination from './ProjectCardPagination';
import pxToRem from '../../../utils/pxToRem';
import useViewportWidth from '../../../hooks/useViewportWidth';
import throttle from 'lodash.throttle';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ProjectCardWrapper = styled(motion.a)`
	position: relative;
	text-decoration: none;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		position: sticky;
		top: 50px;
		background: var(--colour-white);
		height: calc(100vh - 50px);
		height: calc(100dvh - 50px);
		margin-bottom: 0 !important;
	}

	&.project-card {
		&:hover {
			filter: blur(0px);
		}
	}
`;

const VideoOuterWrapper = styled.div`
	position: relative;
	padding-top: 80%;

	&:hover {
		h2 {
			color: var(--colour-black);
		}
	}
`;

const VideoComponentWrapper = styled.div`
	position: absolute;
	inset: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

const Video = styled.video`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

const ImageOuterWrapper = styled.div<StyledProps>`
	position: relative;
	padding-top: ${(props) => props.$use46Ratio ? '150%' : '80%'};

	&:hover {
		h2 {
			color: var(--colour-black);
		}
	}
`;

const ImageWrapper = styled.div<StyledProps>`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: ${(props) => props.$isTop ? 1 : 0};
	overflow: hidden;
`;

const DesktopTitle = styled.h2`
	color: var(--colour-black400);
	position: absolute;
	top: 0;
	right: calc(100% + 16px);
	width: calc(8.3vw - 16px);
	text-align: right;

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileTitle = styled.h2`
	display: none;
	margin-top: ${pxToRem(8)};
	color: var(--colour-black);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const ProjectCard = (props: PhotographyProductionProject) => {
	const {
		slug,
		galleryLength,
		thumbnail,
		title,
		setIsHovered,
		isProduction,
		thumbnailImage,
		thumbnailVideoSnippet,
		thumbnailsUse46Ratio
	} = props;

	const [count, setCount] = useState(0);
	const [isThumbnailGalleryActive, setThumbnailGalleryActive] = useState(false);

	const hasThumbnails = thumbnail && thumbnail?.length > 0;
	const viewport = useViewportWidth();
	const ref = useRef<HTMLAnchorElement>(null);

	const { ref: ref2, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	useEffect(() => {
		if (!hasThumbnails || !isThumbnailGalleryActive) return;

		const interval = setInterval(() => {
			setCount((count) => {
				if (count === thumbnail.length - 1) {
					return 0;
				} else {
					return count + 1;
				}
			});
		}, 250);
	
		return () => {
			clearInterval(interval);
		};
	}, [isThumbnailGalleryActive]);

	useEffect(() => {
		if (viewport != 'mobile') return;

		const handleScroll = () => {
			if (!ref.current) return;
			const rect = ref?.current.getBoundingClientRect();
			const isInViewport = rect.top <= 50;

			setThumbnailGalleryActive(isInViewport);
		};

		const throttledHandleScroll = throttle(handleScroll, 500);
	
		window.addEventListener('scroll', throttledHandleScroll);
		return () => {
			window.removeEventListener('scroll', throttledHandleScroll);
		};
	}, [viewport]);

	return (
		<Link
			href={`${isProduction ? '/production' : '/photography'}/${slug}`}
			passHref
			scroll={false}
		>
			<ProjectCardWrapper
				className="project-card"
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
				ref={ref}
			>
				{!isProduction ? (
					<ImageOuterWrapper
						onMouseOver={() => setThumbnailGalleryActive(true)}
						onMouseOut={() => setThumbnailGalleryActive(false)}
						ref={ref2}
						className={`view-element-scale-up ${
							inView ? 'view-element-scale-up--in-view' : ''
						}`}
						$use46Ratio={thumbnailsUse46Ratio}
					>
						{hasThumbnails && thumbnail.map((item: ThumbnailType, i) => (
							<ImageWrapper
								$isTop={count === i}
								key={i}
							>
								<Image
									src={item?.image?.url}
									layout="fill"
									objectFit="cover"
									priority={i === 0 ? true : false}
								/>
							</ImageWrapper>
						))}
						{title && (
							<DesktopTitle>{title}</DesktopTitle>
						)}
						<ProjectCardPagination
							galleryLength={galleryLength}
							count={count}
							isThumbnailGalleryActive={isThumbnailGalleryActive}
						/>
					</ImageOuterWrapper>
				) : (
					thumbnailVideoSnippet?.url && (
						<VideoOuterWrapper
							onMouseOver={() => setThumbnailGalleryActive(true)}
							onMouseOut={() => setThumbnailGalleryActive(false)}
							ref={ref2}
							className={`view-element-scale-up ${
								inView ? 'view-element-scale-up--in-view' : ''
							}`}
						>
							<VideoComponentWrapper className="video-component-wrapper">
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
							</VideoComponentWrapper>
							{title && (
								<DesktopTitle>{title}</DesktopTitle>
							)}
						</VideoOuterWrapper>
					)
				)}
				{title && (
					<MobileTitle>{title}</MobileTitle>
				)}
			</ProjectCardWrapper>
		</Link>
	);
};

export default ProjectCard;
