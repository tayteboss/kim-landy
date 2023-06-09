import styled from 'styled-components';
import { getSiteData, getPhotographyProject } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { SiteData } from '../../shared/types/types';
import { getAllPhotography } from '../../lib/datocms';

const PageWrapper = styled.div``;

type Props = {
	data: {},
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
			title="COMPLETE"
			description={siteData.seoDescription || ''}
		/>
		Home
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
