import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import useActiveLink from '../../../hooks/useActiveLink';
import { StyledProps } from '../../../shared/types/types';

const PageHeaderWrapper = styled.section<StyledProps>`
	padding: ${pxToRem(16)} 0;
	margin-bottom: ${(props) => props.$marginBottom};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		opacity: 0;
		pointer-events: none;
	}
`;

const PageHeaderInner = styled.div`
	grid-column: 4 / span 6;
	display: flex;
	align-items: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
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

type Props = {
	marginBottom?: string
};

const PageHeader = ({ marginBottom }: Props) => {
	const activeLink = useActiveLink();

	return (
		<PageHeaderWrapper $marginBottom={marginBottom}>
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
