import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import useScrolled from '../../../hooks/useScrolled';
import { StyledProps } from '../../../shared/types/types';

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

type Props = {
	menuIsActive: boolean;
	setMenuIsActive: (value: boolean) => void;
};

const Header = ({ menuIsActive, setMenuIsActive }: Props) => {
	const scrolled = useScrolled({ amount: 100 });

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
		</HeaderWrapper>
	)
};

export default Header;
