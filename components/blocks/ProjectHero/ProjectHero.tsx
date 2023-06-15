import Image from 'next/image';
import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProjectHeroWrapper = styled(motion.section)``;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: calc(100vh - 48px);
	height: calc(100dvh - 48px);
	overflow: hidden;
`;

const ImageInnerWrapper = styled(motion.div)`
	position: relative;
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
`;

const Title = styled.h1`
	grid-column: 2 / span 2;
	color: var(--colour-white);
	text-align: right;
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

type Props = {
	image: string | undefined;
	title: string | undefined;
	date: string | undefined;
	category: string | undefined;
};

const ProjectHero = (props: Props) => {
	const {
		image,
		title,
		date,
		category
	} = props;

	const [viewportHeight, setViewportHeight] = useState(0);

	const { scrollY } = useScroll();
	const filter = useTransform(scrollY, [0, viewportHeight], ['blur(0px) brightness(1)', 'blur(3px) brightness(0.75)']);
	const translateY = useTransform(scrollY, [0, viewportHeight], [0, 50]);
	const transform = useTransform(scrollY, [0, viewportHeight], ['scale(1)', 'scale(1.2)']);

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
					{image && (
						<Image
							src={image}
							layout="fill"
							objectFit="cover"
							priority={true}
						/>
					)}
				</ImageInnerWrapper>
				<ContentWrapper>
					<LayoutGrid>
						{title && (
							<Title>{title}</Title>
						)}
						<ContentInnerWrapper>
							{date && (
								<Date>{date}</Date>
							)}
							{category && (
								<Category>{category}</Category>
							)}
						</ContentInnerWrapper>
					</LayoutGrid>
				</ContentWrapper>
			</ImageWrapper>
		</ProjectHeroWrapper>
	);
};

export default ProjectHero;
