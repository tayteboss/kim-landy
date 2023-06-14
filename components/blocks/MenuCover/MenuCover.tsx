import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const MenuCoverWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	height: 100dvh;
	z-index: 90;
	background: var(--colour-white);
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		backdropFilter: 'blur(0px)',
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 0.5,
		backdropFilter: 'blur(15px)',
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

type Props = {
	menuIsActive: boolean;
};

const MenuCover = ({ menuIsActive }: Props) => {
	return (
		<AnimatePresence>
			{menuIsActive && (
				<MenuCoverWrapper
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
				/>
			)}
		</AnimatePresence>
	);
};

export default MenuCover;
