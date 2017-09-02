import React, { Component } from 'react';

class App extends Component {
	render() {
		return(
			<div className='App'>
				<div className='title'>
					Reminder Pro
				</div>
				<div className='form-inline'>
					<div className='form-group'>
						<input
							className='form-controll'
							placeholder='wpisz zadanie'
						/>
					</div>
					<button
						type='button'
						className='btn btn-success'
					>
						Dodaj
					</button>
				</div>
			</div>
		)
	}
}

export default App;
