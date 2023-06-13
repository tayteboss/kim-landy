import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import useActiveLink from '../../../hooks/useActiveLink';
import { StyledProps } from '../../../shared/types/types';

const PageHeaderWrapper = styled.div`
	padding: ${pxToRem(16)} 0;
	margin-bottom: ${pxToRem(80)};
	
`;

const PageHeaderInner = styled.div`
	grid-column: 4 / span 6;
	display: flex;
	align-items: center;
`;

const LinkWrapper = styled.div`
	display: flex;
`;

const LinkTag = styled.a<StyledProps>`
	&.link-style {
		color: ${(props) => props.$isActive ? 'var(--colour-black)' : 'var(--colour-black400)'};
	}
`;

const Span = styled.span`
	color: var(--colour-black400);
	white-space: pre;
`;

const PageHeader = () => {
	const activeLink = useActiveLink();

	return (
		<PageHeaderWrapper>
			<LayoutGrid>
				<PageHeaderInner>
					<LinkWrapper>
						<Link href="/photography" passHref>
							<LinkTag
								className="link-style"
								$isActive={activeLink === "Photography"}
							>
								Photography
							</LinkTag>
						</Link>
						<Span>, </Span>
					</LinkWrapper>
					<LinkWrapper>
						<Link href="/production" passHref>
							<LinkTag
								className="link-style"
								$isActive={activeLink === "Production"}
							>
								Production
							</LinkTag>
						</Link>
						<Span>, </Span>
					</LinkWrapper>
					<LinkWrapper>
						<Link href="/written" passHref>
							<LinkTag
								className="link-style"
								$isActive={activeLink === "Written"}
							>
								Written
							</LinkTag>
						</Link>
						<Span>, </Span>
					</LinkWrapper>
					<LinkWrapper>
						<Link href="/about-contact" passHref>
							<LinkTag
								className="link-style"
								$isActive={activeLink === "About + Contact"}
							>
								About + Contact
							</LinkTag>
						</Link>
					</LinkWrapper>
				</PageHeaderInner>
			</LayoutGrid>
		</PageHeaderWrapper>
	);
};

export default PageHeader;
