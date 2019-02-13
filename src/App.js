import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
	height: 750px;
`

const Playground = styled.div `
	height: 400px;
	border: ${ props => props.difficulty === 'easy'
	? 60
	: 30 }px solid #fff;
`

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			mouseX: 0,
			mouseY: 0,
			mistakes: 0,
			difficulty: 'hell',
			play: true
		};
	}

	handleMouseMove = event => {
		this.setState( { mouseX: event.clientX, mouseY: event.clientY } )
		if ( this.state.play ) {
			//  left vertical
			if ( this.state.mouseX > -1 && this.state.mouseX < 31 ) {
				if ( this.state.mouseY < 80 || this.state.mouseY > 479 ) 
					this.setState( {
						mistakes: this.state.mistakes + 1
					} )
			}
			// right vertical
			if ( this.state.mouseX > 1504 && this.state.mouseX < 1536 ) {
				if ( this.state.mouseY < 80 || this.state.mouseY > 479 ) 
					this.setState( {
						mistakes: this.state.mistakes + 1
					} )
			}
			// above top
			if ( this.state.mouseY < 80 ) {
				this.setState( {
					mistakes: this.state.mistakes + 1
				} )
			}
			// middle block
			if ( this.state.mouseY > 109 && this.state.mouseY < 450 ) {
				if ( this.state.mouseX > 29 && this.state.mouseX < 1505 ) {
					this.setState( {
						mistakes: this.state.mistakes + 1
					} )
				}
			}
			// bellow bottom
			if ( this.state.mouseY > 479 ) {
				this.setState( {
					mistakes: this.state.mistakes + 1
				} )
			}
		}
	}

	handleDifficulty = event => {
		this.setState( { difficulty: event.target.value } );
	}

	render() {
		return ( <Wrapper className="bg-primary" onMouseMove={this.handleMouseMove}>
			<div>
				Current mouse position: {this.state.mouseX}, {this.state.mouseY}
			</div>
			<div className="mt-2">
				Difficulty:{' '}
				<select onChange={this.handleDifficulty}>
					<option>easy</option>
					<option selected={this.state.difficulty === 'hell'
							? true
							: false}>hell</option>
				</select>
			</div>
			<Playground className="mt-4 bg-primary d-flex justify-content-center align-items-center" difficulty={this.state.difficulty}>
				<h4>Mistakes: {parseInt( this.state.mistakes )}</h4>
			</Playground>
		</Wrapper> )
	}
}

export default App;
