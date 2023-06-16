import styled from 'styled-components';
import { getAllPhotography, getSiteData } from '../../lib/datocms';
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
			title="Kim Landy - Photography"
			description={siteData.seoDescription || ''}
		/>
		<PageHeader marginBottom="80px" />
		<ProjectsList data={data} isProduction={false} />
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await getAllPhotography();
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData
		},
	};
}

export default Page;
