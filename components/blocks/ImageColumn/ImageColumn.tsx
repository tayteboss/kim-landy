import Image from 'next/image';
import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../../../utils/pxToRem';

const ImageColumnWrapper = styled.section`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 ${pxToRem(8)};
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	padding-top: 125%;
`;

type Props = {
	image: {
		url: string;
	};
};

const ImageColumn = ({ image }: Props) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ImageColumnWrapper ref={ref}>
			<LayoutGrid>
				<ImageWrapper
					className={`column-grid-style image-wrapper view-element-scale-up ${
						inView ? 'view-element-scale-up--in-view' : ''
					}`}
				>
					<Image
						src={image.url}
						layout="fill"
						objectFit="cover"
					/>
				</ImageWrapper>
			</LayoutGrid>
		</ImageColumnWrapper>
	);
};

export default ImageColumn;
