import styled from 'styled-components';
import EnquiryColumn from '../../blocks/EnquiryColumn';
import IndexColumn from '../../blocks/IndexColumn';

const FooterWrapper = styled.footer``;

const Footer = () => {
	return (
		<FooterWrapper>
			<IndexColumn />
			<EnquiryColumn
				title="Enquiry"
				isFooterType
			/>
		</FooterWrapper>
	)
};

export default Footer;