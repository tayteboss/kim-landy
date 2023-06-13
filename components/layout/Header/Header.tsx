import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import useScrolled from '../../../hooks/useScrolled';
import { StyledProps } from '../../../shared/types/types';
import useActiveLink from '../../../hooks/useActiveLink';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HeaderWrapper = styled.header`
	padding: ${pxToRem(16)};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	pointer-events: none;
`;

const LinkWrapper = styled.div`
	pointer-events: all;
`;

const Logo = styled.a``;

const MenuTrigger = styled.button<StyledProps>`
	pointer-events: ${(props) => props.$isActive ? 'auto' : 'none'};
	opacity: ${(props) => props.$isActive ? 1 : 0};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const MenuWrapper = styled(motion.div)`
	position: absolute !important;
	top: 100%;
	right: 16px;

	& > * {
		text-align: right;
		pointer-events: all;
	}
`;

const BlockWrapper = styled.div`
	display: block;
`;

const LinkTag = styled.a<StyledProps>`
	display: inline-block;

	&.link-style {
		color: ${(props) => props.$isActive ? 'var(--colour-black)' : 'var(--colour-black400)'};
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
	menuIsActive: boolean;
	setMenuIsActive: (value: boolean) => void;
};

const Header = ({ menuIsActive, setMenuIsActive }: Props) => {
	const scrolled = useScrolled({ amount: 50 });

	const router = useRouter();
	router?.events?.on('routeChangeStart', () => setMenuIsActive(false));

	const activeLink = useActiveLink();

	useEffect(() => {
		if (!scrolled) {
			setMenuIsActive(false);
		}
	}, [scrolled]);

	return (
		<HeaderWrapper className="header">
			<LinkWrapper>
				<Link href="/" passHref>
					<Logo className="link-style">Kim Landy</Logo>
				</Link>
			</LinkWrapper>
			<MenuTrigger
				className="link-style"
				$isActive={scrolled}
				onClick={() => setMenuIsActive(!menuIsActive)}
			>
				{menuIsActive ? 'Close' : 'Menu'}
			</MenuTrigger>
			<AnimatePresence>
				{menuIsActive && (
					<MenuWrapper
						className="column-grid-style"
						variants={wrapperVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
					>
						<BlockWrapper>
							<Link
								href="/"
								passHref
							>
								<LinkTag
									className="link-style link-style--animated-right"
									$isActive={activeLink === "Home"}
								>
									Home
								</LinkTag>
							</Link>
						</BlockWrapper>
						<BlockWrapper>
							<Link
								href="/photography"
								passHref
							>
								<LinkTag
									className="link-style link-style--animated-right"
									$isActive={activeLink === "Photography"}
								>
									Photography
								</LinkTag>
							</Link>
						</BlockWrapper>
						<BlockWrapper>
							<Link
								href="/production"
								passHref
							>
								<LinkTag
									className="link-style link-style--animated-right"
									$isActive={activeLink === "Production"}
								>
									Production
								</LinkTag>
							</Link>
						</BlockWrapper>
						<BlockWrapper>
							<Link
								href="/written"
								passHref
							>
								<LinkTag
									className="link-style link-style--animated-right"
									$isActive={activeLink === "Written"}
								>
									Written
								</LinkTag>
							</Link>
						</BlockWrapper>
						<BlockWrapper>
							<Link
								href="/about-contact"
								passHref
							>
								<LinkTag
									className="link-style link-style--animated-right"
									$isActive={activeLink === "About + Contact"}
								>
									About + Contact
								</LinkTag>
							</Link>
						</BlockWrapper>
					</MenuWrapper>
				)}
			</AnimatePresence>
		</HeaderWrapper>
	)
};

export default Header;
