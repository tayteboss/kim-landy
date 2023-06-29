import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import { FeaturedProjects } from '../../../shared/types/types';
import FeaturedWrittenProject from './FeaturedWrittenProject';
import FeaturedProductionProject from './FeaturedProductionProject';
import FeaturedPhotographyProject from './FeaturedPhotographyProject';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../../../utils/pxToRem';

const FeaturedProjectsColumnWrapper = styled.section`
	&.column-block-style {
		padding-bottom: ${pxToRem(160)};
	}
`;

const FeaturedProjectsColumnInner = styled.div``;

const Title = styled.h2`
	white-space: nowrap;
`;

type Props = {
	data: FeaturedProjects[];
};

const FeaturedProjectsColumn = (props: Props) => {
	const {
		data
	} = props;

	const hasData = data && data.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	return (
		<FeaturedProjectsColumnWrapper
			className="column-block-style"
			ref={ref}
		>
			<LayoutGrid>
				<Title
					className={`column-block-style__title view-element-title-fade-in ${
						inView ? 'view-element-title-fade-in--in-view' : ''
					}`}
				>
					Featured Projects
				</Title>
				<FeaturedProjectsColumnInner className="column-grid-style">
					{hasData && data.map((item, i) => {
						const isPhotography = item._modelApiKey === 'photography_project';
						const isProduction = item._modelApiKey === 'production_project';
						const isWritten = item._modelApiKey === 'written_project';

						return (
							<>
								{isPhotography && (
									<FeaturedPhotographyProject
										key={i}
										title={item?.title}
										slug={item?.slug}
										information={item?.information}
									/>
								)}
								{isProduction && (
									<FeaturedProductionProject
										key={i}
										title={item?.title}
										slug={item?.slug}
										information={item?.information}
									/>
								)}
								{isWritten && (
									<FeaturedWrittenProject
										key={i}
										title={item?.title}
										slug={item?.slug}
										excerpt={item?.excerpt}
									/>
								)}
							</>
						);
					})}
				</FeaturedProjectsColumnInner>
			</LayoutGrid>
		</FeaturedProjectsColumnWrapper>
	);
};

export default FeaturedProjectsColumn;
