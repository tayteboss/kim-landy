import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-black200: ${theme.colours.black200};
		--colour-black400: ${theme.colours.black400};
		--colour-black600: ${theme.colours.black600};
		--font-default: ${theme.fonts.default};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
		--footer-image-height: 100px;
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		font-weight: 100;
	}

	::selection {
		background-color: yellow;
		color: var(--colour-black);
	}

	html {
		scroll-behavior: smooth;
		background: ${theme.colours.white};
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	body {
		position: relative;
		background: var(--colour-white);

		transition: background var(--transition-speed-default) var(--transition-ease);

		&.is-at-bottom {
			background: var(--colour-black);
		}
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-default);
		color: var(--colour-black);
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: underline;
		color: var(--colour-black);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${theme.size.h1};
		line-height: 1rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h1};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h1};
		}
	}

	h2,
	.type-h2 {
		font-size: ${theme.size.h2};
		line-height: 1rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h2};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h2};
		}
	}

	h3,
	.type-h3 {
		font-size: ${theme.size.h3};
		line-height: 1rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h3};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h3};
		}
	}

	h4,
	.type-h4 {
		font-size: ${theme.size.h4};
		line-height: 1rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h4};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h4};
		}
	}

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${theme.size.body};
		line-height: 1rem;

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.body};
		}
	}

	.content {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		a {
			color: var(--colour-black400);

			&:not():last-child {
				margin-bottom: ${pxToRem(16)};
			}
		}

		a {
			text-decoration: none;

			transition: all var(--transition-speed-default) var(--transition-ease);

			&:hover {
				color: var(--colour-black);
			}
		}

		&--list {
			a {
				position: relative;
				display: inline-block;

				&::before {
					content: '';
					position: absolute;
					top: 50%;
					left: 0;
					width: 4px;
					height: 4px;
					background: var(--colour-black);
					opacity: 0;
					transform: translateY(-50%);

					transition: all var(--transition-speed-default) var(--transition-ease);
				}

				&:hover {
					transform: translateX(8px);

					&::before {
						opacity: 1;
						transform: translateX(-8px) translateY(-50%);
					}
				}
			}
		}

		&--black {
			& > * {
				color: var(--colour-black) !important;
			}
		}
	}

	.link-style {
		color: var(--colour-black400);
		text-decoration: none;

		transition: all var(--transition-speed-default) var(--transition-ease);

		&:hover {
			color: var(--colour-black) !important;
		}

		&--animated {
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 0;
				width: 4px;
				height: 4px;
				background: var(--colour-black);
				opacity: 0;
				transform: translateY(-50%);

				transition: all var(--transition-speed-default) var(--transition-ease);
			}

			&:hover {
				transform: translateX(8px);

				&::before {
					opacity: 1;
					transform: translateX(-8px) translateY(-50%);
				}
			}
		}

		&--animated-right {
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				right: 0;
				width: 4px;
				height: 4px;
				background: var(--colour-black);
				opacity: 0;
				transform: translateY(-50%);

				transition: all var(--transition-speed-default) var(--transition-ease);
			}

			&:hover {
				transform: translateX(-8px);

				&::before {
					opacity: 1;
					transform: translateX(8px) translateY(-50%);
				}
			}
		}
	}

	.main,
	.footer {
		transition: all var(--transition-speed-slow) var(--transition-ease);
	}

	.is-at-bottom {
		background: var(--colour-black);

		.menu-trigger {
			opacity: 0;
		}

		.header {
			background: none;
		}

		.main {
			opacity: 0;
		}

		.footer {
			opacity: 1;
		}

		.link-style {
			&:hover {
				color: var(--colour-white) !important;
			}

			&--animated,
			&--animated-right {
				&::before {
					background: var(--colour-white) !important;
				}
			}
		}
	}

	.menu-open {
		.main,
		.footer {
			filter: blur(3px);
		}
	}

	.column-grid-style {
		position: relative;
		grid-column: 4 / span 3;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			grid-column: 3 / 6;
		}

		@media ${theme.mediaBreakpoints.mobile} {
			grid-column: 1 / -1;
		}
	}

	.column-block-style {
		padding-bottom: ${pxToRem(80)};
		position: relative;
		z-index: 5;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			padding-bottom: ${pxToRem(60)};
		}

		@media ${theme.mediaBreakpoints.mobile} {
			padding: 0 ${pxToRem(8)};
		}

		&__title {
			grid-column: 2 / span 2;
			position: sticky;
			top: ${pxToRem(16)};
			text-align: right;

			@media ${theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / span 2;
			}

			@media ${theme.mediaBreakpoints.mobile} {
				grid-column: 1 / -1;
				margin-bottom: ${pxToRem(16)};
				text-align: left;
				position: relative;
				top: initial;
			}
		}
	}

	.secondary-link-style {
		color: var(--colour-black400);
		position: relative;
		transform: translateX(14px);
		display: inline-block;
		text-decoration: none;

		transition: all var(--transition-speed-default) var(--transition-ease);

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: -12px;
			width: 8px;
			height: 1px;
			background: var(--colour-black400);

			transition: all var(--transition-speed-default) var(--transition-ease);
		}

		&:hover {
			color: var(--colour-black);

			&::before {
				background: var(--colour-black)
			}
		}
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity 300ms ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-title-fade-in
	{
		opacity: 0;
		transform: translateX(15px);

		transition: opacity 500ms ease;

		&--in-view
		{
			opacity: 1;
			transform: translateX(0);
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity 500ms cubic-bezier(0.65, 0, 0.35, 1), transform 300ms cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		opacity: 0;

		transition: opacity 750ms ease, transform 2000ms ease;

		img,
		video {
			transform: scale(1.05);
			filter: blur(3px);

			transition: transform 4000ms ease, filter 2000ms ease;
		}

		&--in-view
		{
			opacity: 1;

			img,
			video {
				transform: scale(1);
				filter: blur(0);
			}
		}
	}

	.view-element-scale-up-hero
	{
		opacity: 0;

		transition: opacity 750ms ease, transform 2000ms ease;

		.image-wrapper {
			transform: scale(1.05);

			transition: transform 4000ms ease;
		}

		&--in-view
		{
			opacity: 1;

			.image-wrapper {
				transform: scale(1);
			}
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}
`;
