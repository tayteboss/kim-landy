import styled from 'styled-components';
import { FeaturedProjects } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const FeaturedWrittenProjectWrapper = styled.div`
	&:not(:last-of-type) {
		margin-bottom: ${pxToRem(40)};
	}
`;

const Title = styled.h2`
	color: var(--colour-black);
	margin-bottom: ${pxToRem(16)};
`;

const Excerpt = styled.p`
	color: var(--colour-black400);
	margin-bottom: ${pxToRem(16)};
`;

const LinkTag = styled.a``;

const FeaturedWrittenProject = (props: FeaturedProjects) => {
	const {
		title,
		slug,
		excerpt
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<FeaturedWrittenProjectWrapper
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
			{excerpt && (
				<Excerpt>
					{excerpt}
				</Excerpt>
			)}
			{slug && (
				<Link href={`/written/${slug}`} passHref scroll={false}>
					<LinkTag className="secondary-link-style">
						View project
					</LinkTag>
				</Link>
			)}
		</FeaturedWrittenProjectWrapper>
	);
};

export default FeaturedWrittenProject;
