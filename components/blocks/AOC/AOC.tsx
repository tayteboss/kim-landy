import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import { AnimatePresence, motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';

const options = require('../../../json/siteData.json');

const AOCWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: rgba(255, 255, 255, 0.75);
	backdrop-filter: blur(15px);
	z-index: 9999;
	cursor: pointer;
`;

const AOCInner = styled.div`
	grid-column: 4 / span 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	height: 100lvh;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 3 / 6;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
		padding: 0 ${pxToRem(8)};
	}
`;

const Message = styled.p`
	color: var(--colour-black);
	margin-bottom: ${pxToRem(24)};
`;

const Hint = styled.p`
	color: var(--colour-black400);

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-black);
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

type Props = {
	hasVisited: boolean;
};

const AOC = ({ hasVisited }: Props) => {
	const [IsActive, setIsActive] = useState(false);

	useEffect(() => {
		if (IsActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [IsActive]);

	useEffect(() => {
		if (hasVisited) {
			setIsActive(false);
		} else {
			setIsActive(true);
		}
	}, [hasVisited])

	return (
		<AnimatePresence initial={false}>
			{IsActive && (
				<AOCWrapper
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
					onClick={() => setIsActive(false)}
				>
					<LayoutGrid>
						<AOCInner>
							{options?.acknowledgementOfCountry && (
								<Message>{options.acknowledgementOfCountry}</Message>
							)}
							<Hint>Click anywhere to continue</Hint>
						</AOCInner>
					</LayoutGrid>
				</AOCWrapper>
			)}
		</AnimatePresence>
	);
};

export default AOC;
