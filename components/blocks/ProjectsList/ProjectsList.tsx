import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import ProjectCard from '../../elements/ProjectCard';
import { PhotographyProductionProject, StyledProps } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';

const ProjectsListWrapper = styled.div<StyledProps>`
	margin-bottom: ${pxToRem(240)};

	.grid {
		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			row-gap: ${pxToRem(80)};
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			row-gap: 0;
		}
	}

	.project-card {
		filter: ${(props) => props.$isHovered ? 'blur(3px)' : 'blur(0px)'};

		transition: filter var(--transition-speed-default) var(--transition-ease);

		&:nth-child(12n + 1) {
			grid-column: 4 / span 3;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / span 4;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 2) {
			grid-column: 9 / span 4;
			padding-top: ${pxToRem(80)};
			margin-bottom: ${pxToRem(160)};

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 3 / span 3;
				padding-top: 0;
				margin-bottom: ${pxToRem(80)};
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 3) {
			grid-column: 2 / span 4;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 2 / span 5;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 4) {
			grid-column: 8 / span 3;
			padding-top: ${pxToRem(240)};
			margin-bottom: ${pxToRem(160)};

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 4 / span 3;
				padding-top: 0;
				margin-bottom: ${pxToRem(80)};
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 5) {
			grid-column: 3 / span 4;
			padding-top: ${pxToRem(180)};
			margin-bottom: ${pxToRem(160)};

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / span 4;
				padding-top: 0;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 6) {
			grid-column: 10 / span 3;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 2 / span 5;
				padding-top: 0;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 7) {
			grid-column: 6 / span 3;
			padding-top: ${pxToRem(80)};
			margin-bottom: ${pxToRem(80)};

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 4 / span 2;
				padding-top: 0;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 8) {
			grid-column: 10 / span 3;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 3 / span 3;
				padding-top: 0;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 9) {
			grid-column: 5 / span 6;
			margin-bottom: ${pxToRem(100)};

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / span 3;
				padding-top: 0;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 10) {
			grid-column: 2 / span 5;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 2 / span 5;
				padding-top: 0;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 11) {
			grid-column: 11 / span 2;
			padding-top: ${pxToRem(240)};
			margin-bottom: ${pxToRem(240)};

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 3 / span 2;
				padding-top: 0;
				margin-bottom: ${pxToRem(80)};
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}

		&:nth-child(12n + 12) {
			grid-column: 6 / span 4;

			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 3 / span 3;
				padding-top: 0;
			}

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
			}
		}
	}
`;

type Props = {
	data: PhotographyProductionProject[];
	isProduction: boolean;
};

const ProjectsList = ({ data, isProduction }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const hasData = data && data?.length > 0;

	return (
		<ProjectsListWrapper $isHovered={isHovered}>
			<LayoutWrapper>
				<LayoutGrid>
					{hasData && data.map((item: PhotographyProductionProject, i) => (
						<ProjectCard
							slug={item?.slug}
							galleryLength={item?.thumbnail?.length}
							thumbnail={item?.thumbnail}
							title={item?.title}
							setIsHovered={setIsHovered}
							isProduction={isProduction}
							thumbnailImage={item?.thumbnailImage}
							thumbnailVideoSnippet={item?.thumbnailVideoSnippet}
							thumbnailsUse46Ratio={item?.thumbnailsUse46Ratio}
							key={i}
						/>
					))}
				</LayoutGrid>
			</LayoutWrapper>
		</ProjectsListWrapper>
	);
};

export default ProjectsList;
