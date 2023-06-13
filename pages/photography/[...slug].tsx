import styled from 'styled-components';
import { getSiteData, getPhotographyProject } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { SiteData } from '../../shared/types/types';
import { getAllPhotography } from '../../lib/datocms';
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
		Photography Single
	</PageWrapper>
	);
};

export async function getStaticPaths() {
	const allPhotography = await getAllPhotography();

	return {
		paths: allPhotography.map((item: any) => {
			return `/photography/${item?.slug}`;
		}),
		fallback: true
	};
}

export async function getStaticProps({ params }: any) {
	const data = await getPhotographyProject(params.slug[0]);
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData
		},
	};
}

export default Page;
