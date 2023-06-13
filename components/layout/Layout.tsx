import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode, useState } from 'react';
import ScrollDetector from '../common/ScrollDetector';

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

	return (
		<>
			<Header
				menuIsActive={menuIsActive}
				setMenuIsActive={setMenuIsActive}
			/>
			<Main className="main">{children}</Main>
			<Footer />
			<ScrollDetector />
		</>
	);
};

export default Layout;
