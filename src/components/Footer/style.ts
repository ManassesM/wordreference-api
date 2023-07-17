import { styled } from 'styled-components'

export const StyledFooter = styled.footer`
	height: 2.75rem;

	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0 2rem;

	background: #041526;
	color: #eeeeee;
`

export const Icon = styled.a`
	color: #cccccc;

	svg {
		cursor: pointer;
		&:hover {
			filter: brightness(1.75);
			transform: scale(1.05);
		}
	}
`
