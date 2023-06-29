import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';
import RichText from '../../common/RichText';
import { useInView } from 'react-intersection-observer';

const ProjectInformationWrapper = styled.section`
	padding: ${pxToRem(120)} 0;
	background: var(--colour-white);
	position: relative;
	z-index: 5;
`;

const Title = styled.h2``;

const ContentWrapper = styled.div``;

type Props = {
	data: {} | undefined;
};

const ProjectInformation = ({ data }: Props) => {

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ProjectInformationWrapper ref={ref}>
			<LayoutWrapper>
				<LayoutGrid>
					<Title
						className={`column-block-style__title view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						Information
					</Title>
					<ContentWrapper
						className={`column-grid-style view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						{data && (
							<RichText data={data} />
						)}
					</ContentWrapper>
				</LayoutGrid>
			</LayoutWrapper>
		</ProjectInformationWrapper>
	);
};

export default ProjectInformation;
