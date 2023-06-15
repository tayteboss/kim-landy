import styled from 'styled-components';
import { ContentColumnProps } from '../../../shared/types/types';
import LayoutGrid from '../../common/LayoutGrid';
import RichText from '../../common/RichText';
import { useInView } from 'react-intersection-observer';

const ContentColumnWrapper = styled.div``;

const ContentColumnInner = styled.div``;

const Title = styled.h2``;

const ContentColumn = (props: ContentColumnProps) => {
	const {
		title,
		richText
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ContentColumnWrapper
			className="column-block-style"
			ref={ref}
		>
			<LayoutGrid>
				{title && (
					<Title
						className={`column-block-style__title view-element-title-fade-in ${
							inView ? 'view-element-title-fade-in--in-view' : ''
						}`}
					>
						{title}
					</Title>
				)}
				<ContentColumnInner
					className={`column-grid-style view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					<RichText data={richText} className="content--list" />
				</ContentColumnInner>
			</LayoutGrid>
		</ContentColumnWrapper>
	);
};

export default ContentColumn;
