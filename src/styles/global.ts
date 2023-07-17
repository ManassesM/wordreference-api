import { createGlobalStyle } from 'styled-components'
import { theme } from '../config/theme'

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
    
	}

	html,
	body {
		font-family: ${theme.typography.fontFamily.raleway};
    font-size: ${theme.typography.fontSize};
    font-weight: ${theme.typography.fontWeigth.regular};
		color: ${theme.palette.black};
		background: ${theme.palette.white};
		line-height: ${theme.typography.lineHeight};
		height: 100%;
    overflow: auto;
	}

	a {
		color: ${theme.palette.black};
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}
`
