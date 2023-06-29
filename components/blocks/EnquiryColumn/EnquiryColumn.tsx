import styled, { css } from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import { StyledProps } from '../../../shared/types/types';

const options = require('../../../json/siteData.json');

const styles = css`
	display: inline-block;
	align-items: flex-start;
`;

const EnquiryColumnWrapper = styled.section<StyledProps>`
	&.column-block-style {
		padding-bottom: ${(props) => props.$isFooterType ? pxToRem(40) : pxToRem(80)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			padding-bottom: ${pxToRem(60)};
		}
	}
`;

const EnquiryColumnInner = styled.div``;

const Title = styled.h2``;

const BlockWrapper = styled.div`
	display: block;
`;

const Email = styled.a`
	${styles}
`;

const Phone = styled.a`
	${styles}
`;

const Address = styled.p`
	color: var(--colour-black400);
`;

const Instagram = styled.a`
	${styles}
	margin-top: ${pxToRem(16)};
`;

type Props = {
	title: string;
	isFooterType?: boolean;
};

const EnquiryColumn = (props: Props) => {
	const {
		title,
		isFooterType
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});	

	return (
		<EnquiryColumnWrapper
			className="column-block-style"
			ref={ref}
			$isFooterType={isFooterType}
		>
			<LayoutGrid>
				{title && (
					<Title
						className={`column-block-style__title view-element-title-fade-in ${
							inView ? 'view-element-title-fade-in--in-view' : ''
						}`}
					>
						{title}
					</Title>
				)}
				<EnquiryColumnInner
					className={`column-grid-style view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					{options?.email && (
						<BlockWrapper>
							<Email
								href={`mailto:${options.email}`}
								className="link-style link-style--animated"
							>
								{options.email}
							</Email>
						</BlockWrapper>
					)}
					{options?.phone && (
						<BlockWrapper>
							<Phone
								href={`tel:${options.phone}`}
								className="link-style link-style--animated"
							>
								{options.phone}
							</Phone>
						</BlockWrapper>
					)}
					{options?.address && (
						<BlockWrapper>
							<Address>
								{options.address}
							</Address>
						</BlockWrapper>
					)}
					{(options?.instagramUrl && options?.instagramHandle) && (
						<Instagram
							href={options.instagramUrl}
							target="_blank"
							className="link-style link-style--animated"
						>
							@{options.instagramHandle}
						</Instagram>
					)}
				</EnquiryColumnInner>
			</LayoutGrid>
		</EnquiryColumnWrapper>
	);
};

export default EnquiryColumn;
