import styled from 'styled-components';
import { PhotographyProject, StyledProps } from '../../../shared/types/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ProjectCardPagination from './ProjectCardPagination';
import pxToRem from '../../../utils/pxToRem';
import useViewportWidth from '../../../hooks/useViewportWidth';
import throttle from 'lodash.throttle';

const ProjectCardWrapper = styled.a`
	position: relative;
	text-decoration: none;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		position: sticky;
		top: 48px;
		background: var(--colour-white);
		height: calc(100vh - 48px);
		height: calc(100dvh - 48px);
		margin-bottom: 0 !important;
	}

	&.project-card {
		&:hover {
			filter: blur(0px);
		}
	}
`;

const ImageOuterWrapper = styled.div`
	position: relative;
	padding-top: 80%;

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

const ProjectCard = (props: PhotographyProject) => {
	const {
		slug,
		galleryLength,
		thumbnail,
		title,
		setIsHovered
	} = props;

	const [count, setCount] = useState(0);
	const [isThumbnailGalleryActive, setThumbnailGalleryActive] = useState(false);

	const hasThumbnails = thumbnail && thumbnail?.length > 0;
	const viewport = useViewportWidth();
	const ref = useRef<HTMLAnchorElement>(null);

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
	}, []);

	return (
		<Link href={`/photography/${slug}`} passHref>
			<ProjectCardWrapper
				className="project-card"
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
				ref={ref}
			>
				<ImageOuterWrapper
					onMouseOver={() => setThumbnailGalleryActive(true)}
					onMouseOut={() => setThumbnailGalleryActive(false)}
				>
					{hasThumbnails && thumbnail.map((item: { image: { url: string } }, i) => (
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
				{title && (
					<MobileTitle>{title}</MobileTitle>
				)}
			</ProjectCardWrapper>
		</Link>
	);
};

export default ProjectCard;
