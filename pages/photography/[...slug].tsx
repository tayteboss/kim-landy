import styled from 'styled-components';
import { getSiteData, getPhotographyProject, getNextProject } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { PhotographyProductionProject, SiteData } from '../../shared/types/types';
import { getAllPhotography } from '../../lib/datocms';
import { motion } from 'framer-motion';
import PageHeader from '../../components/layout/PageHeader';
import ProjectHero from '../../components/blocks/ProjectHero';
import ProjectInformation from '../../components/blocks/ProjectInformation';
import ProjectGallery from '../../components/blocks/ProjectGallery';
import ProjectFooter from '../../components/blocks/ProjectFooter';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: PhotographyProductionProject;
	nextProjectData: PhotographyProductionProject;
	siteData: SiteData;
	pageTransitionVariants: {};
};

const Page = (props: Props) => {
	const {
		data,
		nextProjectData,
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
				title={`Kim Landy - ${data?.title}`}
				description={siteData?.seoDescription || ''}
			/>
			<PageHeader marginBottom="0" />
			<ProjectHero
				image={data?.heroImage?.url}
				title={data?.title}
				date={data?.date}
				category={data?.category}
			/>
			<ProjectInformation
				data={data?.information}
			/>
			<ProjectGallery
				images={data?.gallery}
			/>
			<ProjectFooter data={nextProjectData} />
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
	const nextProjectData = await getNextProject(data.id);
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData,
			nextProjectData
		},
	};
}

export default Page;
