import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import Link from 'next/link';

const CreditColumnWrapper = styled.div`
	&.column-block-style {
		margin-bottom: 0;
	}
`;

const CreditColumnInner = styled.div``;

const Title = styled.h2``;

const BlockWrapper = styled.div`
	display: block;
`;

const LinkTag = styled.a`
	display: inline-block;
`;

const CreditColumn = () => {
	const year = new Date().getFullYear();

	return (
		<CreditColumnWrapper className="column-block-style">
			<LayoutGrid>
				<Title className="column-block-style__title">
					© Kim Landy {year}
				</Title>
				<CreditColumnInner className="column-grid-style">
					<BlockWrapper>
						<Link
							href="https://tayte.co/"
							passHref
						>
							<LinkTag
								className="link-style link-style--animated"
								target="_blank"
							>
								built by tayte.co
							</LinkTag>
						</Link>
					</BlockWrapper>
				</CreditColumnInner>
			</LayoutGrid>
		</CreditColumnWrapper>
	);
};

export default CreditColumn;
