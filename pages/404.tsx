import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import LayoutGrid from '../components/common/LayoutGrid';
import Link from 'next/link';

const PageWrapper = styled.div`
	padding: 100px 0;
	margin-bottom: 500px;
`;

const ContentColumnWrapper = styled.section`
	background: var(--colour-white);
`;

const ContentColumnInner = styled.div``;

const Title = styled.h2``;

const LinkTag = styled.a``;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo
				title="Kim Landy - 404"
			/>
			<ContentColumnWrapper
				className="column-block-style column-block-style--default"
			>
				<LayoutGrid>
						<Title
							className="column-block-style__title"
						>
							404
						</Title>
					<ContentColumnInner
						className="column-grid-style"
					>
						<Link href="/" passHref>
							<LinkTag className="link-style">Go back</LinkTag>
						</Link>
					</ContentColumnInner>
				</LayoutGrid>
			</ContentColumnWrapper>
		</PageWrapper>
	)
}

export default Page;
