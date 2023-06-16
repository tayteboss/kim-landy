import styled from 'styled-components';
import { StyledProps, WrittenProject } from '../../../shared/types/types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import WrittenCard from '../../elements/WrittenCard';
import LayoutGrid from '../../common/LayoutGrid';
import { useState } from 'react';
import pxToRem from '../../../utils/pxToRem';

const WrittenListWrapper = styled.section<StyledProps>`
	grid-column: 4 / -1;
	margin-bottom: ${pxToRem(120)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(80)};
		grid-column: 1 / -1;
		padding: 0 ${pxToRem(8)};
	}

	.written-card {
		filter: ${(props) => props.$isHovered ? 'blur(3px)' : 'blur(0px)'};
	}
`;

const WrittenList = ({ data }: any) => {
	const hasData = data && data.length > 0;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<LayoutGrid>
			<WrittenListWrapper $isHovered={isHovered}>
				<ResponsiveMasonry
					columnsCountBreakPoints={{300: 1, 500: 2, 768: 2, 900: 3}}
				>
					<Masonry gutter="16px">
						{hasData && data.map((item: WrittenProject, i: number) => (
							<WrittenCard
								title={item?.title}
								excerpt={item?.excerpt}
								link={item?.link}
								setIsHovered={setIsHovered}
								key={i}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</WrittenListWrapper>
		</LayoutGrid>
	);
};

export default WrittenList;
