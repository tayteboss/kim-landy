import styled from 'styled-components';
import { getHomePage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { FeaturedProjects, SiteData, Transitions } from '../shared/types/types';
import PageHeader from '../components/layout/PageHeader';
import ContentColumn from '../components/blocks/ContentColumn';
import EnquiryColumn from '../components/blocks/EnquiryColumn';
import FeaturedProjectsColumn from '../components/blocks/FeaturedProjectsColumn';
import FeaturedHomeImages from '../components/blocks/FeaturedHomeImages';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)``;

const pageTransitionVariants: Transitions = {
	hidden: { opacity: 0, transition: { duration: 0.5, delay: 0.25 } },
	visible: { opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
};

type Props = {
	data: {
		about: {}
		clients: {}
		featuredProjects: FeaturedProjects[];
		featuredImages: [];
	};
	siteData: SiteData;
};

const Page = (props: Props) => {
	const {
		data,
		siteData,
	} = props;

	return (
	<PageWrapper
		variants={pageTransitionVariants}
		initial="hidden"
		animate="visible"
		exit="hidden"
	>
		<NextSeo
			title="Kim Landy - Home"
			description={siteData?.seoDescription || ''}
		/>
		<PageHeader marginBottom="80px" />
		<ContentColumn
			title="About"
			richText={data?.about}
		/>
		<EnquiryColumn title="Enquiry" />
		<ContentColumn
			title="Clients"
			richText={data?.clients}
		/>
		<FeaturedProjectsColumn
			data={data?.featuredProjects}
		/>
		<FeaturedHomeImages
			data={data?.featuredImages}
		/>
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await getHomePage();
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData
		},
	};
}

export default Page;
