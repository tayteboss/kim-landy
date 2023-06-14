import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode, useEffect, useState } from 'react';
import ScrollDetector from '../common/ScrollDetector';
import MenuCover from '../blocks/MenuCover';

const Main = styled.main`
	opacity: 1;

	transition: opacity var(--transition-speed-default) var(--transition-ease);
`;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const {
		children
	} = props;

	const [menuIsActive, setMenuIsActive] = useState(false);

	useEffect(() => {
		const body = document.querySelector('body');

		if (!body) return;

		if (menuIsActive) {
			body.classList.add('menu-open');
		} else {
			body.classList.remove('menu-open');
		}
	}, [menuIsActive]);

	useEffect(() => {
		if (!menuIsActive) return;

		const handleScroll = () => {
			setMenuIsActive(false);
		}
		window.addEventListener('scroll', handleScroll);
	}, [menuIsActive]);
	

	return (
		<>
			<Header
				menuIsActive={menuIsActive}
				setMenuIsActive={setMenuIsActive}
			/>
			<Main className="main">{children}</Main>
			<Footer />
			<MenuCover menuIsActive={menuIsActive} />
			<ScrollDetector />
		</>
	);
};

export default Layout;
