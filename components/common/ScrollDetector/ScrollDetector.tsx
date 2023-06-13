import React, { useEffect, useState } from 'react';

const ScrollDetector = () => {
	const [isAtBottom, setIsAtBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		if (windowHeight + scrollTop >= documentHeight) {
			setIsAtBottom(true);
		} else {
			setIsAtBottom(false);
		}
		};

		// Add the scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		// Add or remove the class on the body element based on the state
		if (isAtBottom) {
			document.body.classList.add('is-at-bottom');
		} else {
			document.body.classList.remove('is-at-bottom');
		}
	}, [isAtBottom]);

	return null;
};

export default ScrollDetector;