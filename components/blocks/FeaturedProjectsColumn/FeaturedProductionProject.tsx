import styled from 'styled-components';
import { FeaturedProjects } from '../../../shared/types/types';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const FeaturedProductionProjectWrapper = styled.div`
	&:not(:last-of-type) {
		margin-bottom: ${pxToRem(40)};
	}
`;

const Title = styled.h2`
	color: var(--colour-black);
	margin-bottom: ${pxToRem(16)};
`;

const RichTextWrapper = styled.div`
	margin-bottom: ${pxToRem(16)};
`;

const LinkTag = styled.a``;

const FeaturedProductionProject = (props: FeaturedProjects) => {
	const {
		title,
		slug,
		information
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<FeaturedProductionProjectWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{title && (
				<Title>
					{title}
				</Title>
			)}
			{information && (
				<RichTextWrapper>
					<RichText data={information} />
				</RichTextWrapper>
			)}
			{slug && (
				<Link href={`/production/${slug}`} passHref>
					<LinkTag className="secondary-link-style">
						View project
					</LinkTag>
				</Link>
			)}
		</FeaturedProductionProjectWrapper>
	);
};

export default FeaturedProductionProject;
