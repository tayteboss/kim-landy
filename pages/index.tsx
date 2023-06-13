import styled from 'styled-components';
import { getHomePage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { FeaturedProjects, SiteData } from '../shared/types/types';
import PageHeader from '../components/layout/PageHeader';
import ContentColumn from '../components/blocks/ContentColumn';
import EnquiryColumn from '../components/blocks/EnquiryColumn';
import FeaturedProjectsColumn from '../components/blocks/FeaturedProjectsColumn';
import FeaturedHomeImages from '../components/blocks/FeaturedHomeImages';

const PageWrapper = styled.div``;

type Props = {
	data: {
		about: {}
		clients: {}
		featuredProjects: FeaturedProjects[];
		featuredImages: [];
	},
	siteData: SiteData
};

const Page = (props: Props) => {
	const {
		data,
		siteData
	} = props;

	console.log('data', data);
	console.log('siteData', siteData);

	return (
	<PageWrapper>
		<NextSeo
			title="Kim Landy - Home"
			description={siteData.seoDescription || ''}
		/>
		<PageHeader />
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
