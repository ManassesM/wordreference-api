import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import * as S from './style'

export function Footer() {
	return (
		<S.StyledFooter>
			<S.Icon href='https://linkedin.com/in/manasses-moura/' target='_blank'>
				<LinkedInIcon />
			</S.Icon>
			<S.Icon href='https://github.com/ManassesM/' target='_blank'>
				<GitHubIcon />
			</S.Icon>
		</S.StyledFooter>
	)
}
