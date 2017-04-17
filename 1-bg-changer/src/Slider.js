import React, { Component } from 'react';

class Slider extends React.Component {
	render() {
		return (
			<div>
				<p>R = {this.props.r}</p>
				<input type="range" min="0" max="255" id="slider--r" value={this.props.r} onChange={this.props.updateR}/>
				<p>G = {this.props.g}</p>
          		<input type="range" min="0" max="255" id="slider--g" value={this.props.g} onChange={this.props.updateG}/>
				<p>B = {this.props.b}</p>
          		<input type="range" min="0" max="255" id="slider--b" value={this.props.b} onChange={this.props.updateB}/>
			</div>
		);
	}
}

export default Slider;