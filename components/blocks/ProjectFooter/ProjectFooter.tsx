import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';
import { PhotographyProductionProject, StyledProps } from '../../../shared/types/types';
import Image from 'next/image';
import { useState } from 'react';

const ProjectFooterWrapper = styled.div`
	padding: ${pxToRem(80)} 0 0 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(80)};
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const LinkTag = styled.a``;

const BackToTopTrigger = styled.button``;

const ImageWrapper = styled.div<StyledProps>`
	position: relative;
	grid-column: 2 / 4;
	padding-top: 80%;
	opacity: ${(props) => props.$isActive ? 1 : 0};

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

type Props = {
	data: PhotographyProductionProject;
};

const ProjectFooter = ({ data }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleBackToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<ProjectFooterWrapper>
			<LayoutWrapper>
				<LayoutGrid>
					{data?.heroImage?.url && (
						<ImageWrapper
							$isActive={isHovered}
						>
							<Image
								src={data?.heroImage?.url}
								layout="fill"
								objectFit="cover"
							/>
						</ImageWrapper>
					)}
					<ContentWrapper className="column-grid-style">
						{data?.slug && (
							<Link href={`/photography/${data.slug}`} passHref scroll={false}>
								<LinkTag
									className="link-style link-style--animated"
									onMouseOver={() => setIsHovered(true)}
									onMouseOut={() => setIsHovered(false)}
								>
									Next project
								</LinkTag>
							</Link>
						)}
						<BackToTopTrigger
							onClick={() => handleBackToTop()}
							className="link-style link-style--animated"
						>
							Back to top
						</BackToTopTrigger>
					</ContentWrapper>
				</LayoutGrid>
			</LayoutWrapper>
		</ProjectFooterWrapper>
	);
};

export default ProjectFooter;
