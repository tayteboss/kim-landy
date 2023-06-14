import styled from 'styled-components';
import EnquiryColumn from '../../blocks/EnquiryColumn';
import IndexColumn from '../../blocks/IndexColumn';
import CreditColumn from '../../blocks/CreditColumn';

const FooterWrapper = styled.footer`
	padding-bottom: 50vh;
	opacity: 0;

	transition: opacity var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-bottom: 10vh;
	}

	.column-block-style__title {
		color: var(--colour-white);
	}
`;

const Footer = () => {
	return (
		<FooterWrapper className="footer">
			<IndexColumn />
			<EnquiryColumn
				title="Enquiry"
				isFooterType
			/>
			<CreditColumn />
		</FooterWrapper>
	)
};

export default Footer;