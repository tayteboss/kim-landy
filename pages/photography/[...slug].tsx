import styled from 'styled-components';
import { getSiteData, getPhotographyProject } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { PhotographyProject, SiteData } from '../../shared/types/types';
import { getAllPhotography } from '../../lib/datocms';
import { motion } from 'framer-motion';
import PageHeader from '../../components/layout/PageHeader';
import ProjectHero from '../../components/blocks/ProjectHero';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: PhotographyProject;
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
			title={`Kim Landy - ${data?.title}`}
			description={siteData.seoDescription || ''}
		/>
		<PageHeader marginBottom="0" />
		<ProjectHero
			image={data?.heroImage?.url}
			title={data?.title}
			date={data?.date}
			category={data?.category}
		/>
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
