import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const PageHeaderWrapper = styled.div`
	grid-column: 4 / span 6;
	display: flex;
	align-items: center;
	padding: ${pxToRem(16)};
`;

const LinkWrapper = styled.div`
	display: flex;
`;

const LinkTag = styled.a``;

const Span = styled.span`
	color: var(--colour-black400);
	white-space: pre;
`;

const PageHeader = () => {
	return (
		<PageHeaderWrapper>
			<LinkWrapper>
				<Link href="/photography" passHref>
					<LinkTag className="link-style">Photography</LinkTag>
				</Link>
				<Span>, </Span>
			</LinkWrapper>
			<LinkWrapper>
				<Link href="/production" passHref>
					<LinkTag className="link-style">Production</LinkTag>
				</Link>
				<Span>, </Span>
			</LinkWrapper>
			<LinkWrapper>
				<Link href="/written" passHref>
					<LinkTag className="link-style">Written</LinkTag>
				</Link>
				<Span>, </Span>
			</LinkWrapper>
			<LinkWrapper>
				<Link href="/about-contact" passHref>
					<LinkTag className="link-style">About + Contact</LinkTag>
				</Link>
			</LinkWrapper>
		</PageHeaderWrapper>
	);
};

export default PageHeader;
