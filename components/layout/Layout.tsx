import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode, useState } from 'react';

const Main = styled.main``;

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
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
