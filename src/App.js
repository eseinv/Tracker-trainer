import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			mouseX: 0,
			mouseY: 0,
			mistakes: 0
		};
	}

	handleMouseMove = event => {
		this.setState( { mouseX: event.clientX, mouseY: event.clientY } )
		if ( this.state.mouseX > 300 || this.state.mouseY > 300 ) {
			this.setState( {
				mistakes: this.state.mistakes + 1
			} )
		}
	}

	render() {
		return ( <div style={{
				height: '750px'
			}} onMouseMove={this.handleMouseMove} className="bg-primary">
			<div>
				Current mouse position: {this.state.mouseX}, {this.state.mouseY}
			</div>
			<div>
				Mistakes: {parseInt( this.state.mistakes )}
			</div>
		</div> );
	}
}

export default App;
