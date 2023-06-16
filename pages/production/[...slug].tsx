import styled from 'styled-components';
import { getSiteData, getProductionProject } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { PhotographyProductionProject, SiteData } from '../../shared/types/types';
import { getAllProduction } from '../../lib/datocms';
import { motion } from 'framer-motion';
import PageHeader from '../../components/layout/PageHeader';
import ProjectHero from '../../components/blocks/ProjectHero';
import ProjectInformation from '../../components/blocks/ProjectInformation';
import ContentColumn from '../../components/blocks/ContentColumn';
import pxToRem from '../../utils/pxToRem';

const PageWrapper = styled(motion.div)`
	margin-bottom: ${pxToRem(240)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(80)};
	}
`;

type Props = {
	data: PhotographyProductionProject;
	siteData: SiteData;
	pageTransitionVariants: {};
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
			title={`Kim Landy - ${data?.title}`}
			description={siteData?.seoDescription || ''}
		/>
		<PageHeader marginBottom="0" />
		<ProjectHero
			image={data?.heroImage?.url}
			title={data?.title}
			date={data?.date}
			category={data?.category}
			isProduction={true}
			thumbnailImage={data?.thumbnailImage}
			thumbnailVideoSnippet={data?.thumbnailVideoSnippet}
			fullVideoExternalLink={data?.fullVideoExternalLink}
		/>
		<ProjectInformation
			data={data?.information}
		/>
		<ContentColumn
			title="Credits"
			richText={data?.credits}
		/>
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
