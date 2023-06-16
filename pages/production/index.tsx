import styled from 'styled-components';
import { getAllProduction, getSiteData } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { SiteData } from '../../shared/types/types';
import { motion } from 'framer-motion';
import PageHeader from '../../components/layout/PageHeader';
import ProjectsList from '../../components/blocks/ProjectsList';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: [],
	siteData: SiteData,
	pageTransitionVariants: {}
};

const Page = (props: Props) => {
	const {
		data,
		siteData,
		pageTransitionVariants
	} = props;

	return (
	<PageWrapper
		variants={pageTransitionVariants}
		initial="hidden"
		animate="visible"
		exit="hidden"
	>
		<NextSeo
			title="Kim Landy - Production"
			description={siteData?.seoDescription || ''}
		/>
		<PageHeader marginBottom="80px" />
		<ProjectsList data={data} isProduction={true} />
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await getAllProduction();
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData
		},
	};
}

export default Page;
