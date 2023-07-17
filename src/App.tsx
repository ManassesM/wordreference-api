import { styled } from 'styled-components'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const Container = styled.div`
	/* display: flex;
	flex-direction: column; */
`

const Body = styled.div`
	min-height: calc(100vh - 6.75rem);

	display: flex;
	justify-content: center;
	align-items: center;

	border: 5px solid red; // remove line
`

function App() {
	return (
		<Container>
			<Header />
			<Body>
				<div>word</div>
				<div>definition</div>
			</Body>
			<Footer />
		</Container>
	)
}

export default App
