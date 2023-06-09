import styled from 'styled-components';
import { getAllProduction, getSiteData } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { SiteData } from '../../shared/types/types';

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
			title="Kim Landy - Production"
			description={siteData.seoDescription || ''}
		/>
		Home
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
