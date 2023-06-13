import styled from 'styled-components';
import { getSiteData, getProductionProject } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { SiteData } from '../../shared/types/types';
import { getAllProduction } from '../../lib/datocms';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: {};
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
			title="COMPLETE"
			description={siteData.seoDescription || ''}
		/>
		Production Single
	</PageWrapper>
	);
};

export async function getStaticPaths() {
	const allProduction = await getAllProduction();

	return {
		paths: allProduction.map((item: any) => {
			return `/production/${item?.slug}`;
		}),
		fallback: true
	};
}

export async function getStaticProps({ params }: any) {
	const data = await getProductionProject(params.slug[0]);
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData
		},
	};
}

export default Page;
