import styled from 'styled-components';
import { getAboutContactPage, getSiteData } from '../lib/datocms';
import { SiteData } from '../shared/types/types';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import PageHeader from '../components/layout/PageHeader';
import ContentColumn from '../components/blocks/ContentColumn';
import EnquiryColumn from '../components/blocks/EnquiryColumn';
import ImageColumn from '../components/blocks/ImageColumn';
import pxToRem from '../utils/pxToRem';

const PageWrapper = styled(motion.div)`
	margin-bottom: ${pxToRem(120)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(80)};
	}
`;

type Props = {
	data: {
		about: {}
		image: {
			url: string;
		};
	};
	siteData: SiteData;
	pageTransitionVariants: {};
};

const Page = (props: Props) => {
	const {
		data,
		siteData,
		pageTransitionVariants
	} = props;

	console.log('data', data);
	console.log('siteData', siteData);

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title="Kim Landy - About + Contact"
				description={siteData.seoDescription || ''}
			/>
			<PageHeader marginBottom="80px" />
			<EnquiryColumn title="Enquiry" />
			<ContentColumn
				title="About"
				richText={data?.about}
			/>
			<ImageColumn image={data?.image} />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await getAboutContactPage();
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData
		},
	};
}

export default Page;
