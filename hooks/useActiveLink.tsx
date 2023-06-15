import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useActiveLink = (): string => {
	const [activeLink, setActiveLink] = useState<string>('Home');
	const router = useRouter();

	useEffect(() => {
		if (router.pathname === '/') {
			setActiveLink('Home');
		} else if (router.pathname.includes('/photography')) {
			setActiveLink('Photography');
		} else if (router.pathname.includes('/production')) {
			setActiveLink('Production');
		} else if (router.pathname.includes('/written')) {
			setActiveLink('Written');
		} else if (router.pathname.includes('/about-contact')) {
			setActiveLink('About + Contact');
		} else {
			setActiveLink('');
		}
	}, [router]);

	return activeLink;
};

export default useActiveLink;
