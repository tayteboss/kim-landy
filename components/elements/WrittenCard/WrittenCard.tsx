import styled from 'styled-components';
import { WrittenProject } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const WrittenCardWrapper = styled.div`
	margin-bottom: ${pxToRem(24)};

	&:hover {
		filter: blur(0) !important;
	}
`;

const Title = styled.h2`
	margin-bottom: ${pxToRem(16)};
`;

const Excerpt = styled.p`
	margin-bottom: ${pxToRem(16)};
	color: var(--colour-black400);
`;

const Link = styled.a``;

const WrittenCard = (props: WrittenProject) => {
	const {
		title,
		excerpt,
		link,
		setIsHovered
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<WrittenCardWrapper
			ref={ref}
			className={`written-card view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{title && (
				<Title>{title}</Title>
			)}
			{excerpt && (
				<Excerpt>{excerpt}</Excerpt>
			)}
			<Link
				href={link}
				target="_blank"
				className="secondary-link-style"
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				Read more
			</Link>
		</WrittenCardWrapper>
	);
};

export default WrittenCard;
