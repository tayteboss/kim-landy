import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FeaturedHomeImagesType, StyledProps } from '../../../shared/types/types';
import LayoutGrid from '../../common/LayoutGrid';

const FeaturedHomeImagesWrapper = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	width: 100%;
	pointer-events: none;
`;

const FeaturedHomeImagesInner = styled.div`
	grid-column: 7 / -1;
	padding-top: 80%;
	position: relative;
	background: var(--colour-black400);
`;

const ImageWrapper = styled.div<StyledProps>`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: ${(props) => props.$isTop ? 1 : 0};
`;

type Props = {
	data: FeaturedHomeImagesType[];
};

const FeaturedHomeImages = (props: Props) => {
	const {
		data
	} = props;

	const hasData = data && data.length > 0;

	const ref = useRef<HTMLDivElement>(null);

	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((count) => {
				if (count === data.length - 1) {
					return 0;
				} else {
					return count + 1;
				}
			});
		}, 1000);

		const height = ref.current?.clientHeight;
		document.documentElement.style.setProperty('--footer-image-height', `${height}px`);
	
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<FeaturedHomeImagesWrapper>
			<LayoutGrid>
				<FeaturedHomeImagesInner ref={ref}>
					{hasData && data.map((item, i) => (
						<ImageWrapper
							$isTop={count === i}
							key={i}
						>
							<Image
								src={item?.image?.url}
								layout="fill"
								objectFit="cover"
								priority={true}
							/>
						</ImageWrapper>
					))}
				</FeaturedHomeImagesInner>
			</LayoutGrid>
		</FeaturedHomeImagesWrapper>
	);
};

export default FeaturedHomeImages;