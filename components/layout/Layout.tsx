import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode, useEffect, useState } from 'react';
import ScrollDetector from '../common/ScrollDetector';
import MenuCover from '../blocks/MenuCover';
import AOC from '../blocks/AOC';

const Main = styled.main`
	opacity: 1;

	transition: opacity var(--transition-speed-default) var(--transition-ease);
`;

type Props = {
	children: ReactNode;
	hasVisited: boolean;
};

const Layout = (props: Props) => {
	const {
		children,
		hasVisited
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
			<AOC hasVisited={hasVisited} />
			<Header
				menuIsActive={menuIsActive}
				setMenuIsActive={setMenuIsActive}
			/>
			<Main className="main">{children}</Main>
			<Footer />
			<MenuCover
				menuIsActive={menuIsActive}
				setMenuIsActive={setMenuIsActive}
			/>
			<ScrollDetector />
		</>
	);
};

export default Layout;
