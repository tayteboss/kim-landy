import styled from 'styled-components';
import { StyledProps } from '../../../shared/types/types';

const ProjectCardPaginationWrapper = styled.div<StyledProps>`
	position: absolute;
	bottom: 0;
	right: calc(100% + 16px);
	width: calc(4vw - 16px);
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: wrap-reverse;
	row-gap: 3px;
	column-gap: 3px;
	text-align: right;
	opacity: ${(props) => props.$isActive ? 1 : 0};

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: calc(16.6vw - 8px);
	}
`;

const Block = styled.div<StyledProps>`
	width: 3px;
	height: 3px;
	background: ${(props) => props.$isActive ? 'var(--colour-black)' : 'var(--colour-black400)'};
`;

type Props = {
	galleryLength: number | undefined;
	count: number;
	isThumbnailGalleryActive: boolean;
};

const ProjectCardPagination = ({ galleryLength, count, isThumbnailGalleryActive }: Props) => {
	return (
		<ProjectCardPaginationWrapper $isActive={isThumbnailGalleryActive}>
			{[...Array(galleryLength)].map((_, i) => (
				<Block
					$isActive={i === count}
					key={i}
				/>
			))}
		</ProjectCardPaginationWrapper>
	);
};

export default ProjectCardPagination;
