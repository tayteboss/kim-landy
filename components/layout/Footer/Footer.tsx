import styled from 'styled-components';
import EnquiryColumn from '../../blocks/EnquiryColumn';
import IndexColumn from '../../blocks/IndexColumn';

const FooterWrapper = styled.footer`
	padding-bottom: 50vh;
	opacity: 0;

	transition: opacity var(--transition-speed-default) var(--transition-ease);

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
		</FooterWrapper>
	)
};

export default Footer;