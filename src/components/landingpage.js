import React,  { Component } from 'react';
import {  Grid, Cell } from 'react-mdl';


class Landing extends Component {
	render() {
		return(
			<div>

				<div style={{width: '100%', margin: 'auto'}}>
				<Grid>
					<Cell col={12}></Cell>
				</Grid>
			</div>
			</div>
		)
	}
}

export default Landing;