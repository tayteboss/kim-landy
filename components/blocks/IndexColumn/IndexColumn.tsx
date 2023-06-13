import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';
import useActiveLink from '../../../hooks/useActiveLink';
import { StyledProps } from '../../../shared/types/types';

const IndexColumnWrapper = styled.div`
	margin-bottom: ${pxToRem(40)};
`;

const IndexColumnInner = styled.div``;

const Title = styled.h2``;

const BlockWrapper = styled.div`
	display: block;
`;

const LinkTag = styled.a<StyledProps>`
	display: inline-block;

	&.link-style {
		color: ${(props) => props.$isActive ? 'var(--colour-black)' : 'var(--colour-black400)'};
	}
`;

const IndexColumn = () => {
	const activeLink = useActiveLink();

	return (
		<IndexColumnWrapper className="column-block-style">
			<LayoutGrid>
				<Title className="column-block-style__title">
					Index
				</Title>
				<IndexColumnInner className="column-grid-style">
					<BlockWrapper>
						<Link
							href="/"
							passHref
						>
							<LinkTag
								className="link-style link-style--animated"
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
								className="link-style link-style--animated"
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
								className="link-style link-style--animated"
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
								className="link-style link-style--animated"
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
								className="link-style link-style--animated"
								$isActive={activeLink === "About + Contact"}
							>
								About + Contact
							</LinkTag>
						</Link>
					</BlockWrapper>
				</IndexColumnInner>
			</LayoutGrid>
		</IndexColumnWrapper>
	);
};

export default IndexColumn;
