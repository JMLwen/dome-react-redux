import '../css/btnAdd.css';
import React,{Component, PropTypes  } from 'react';

export default class BtnAdd extends Component{
	render(){
		return(
			<button className="btn-add" onClick={this.props.addAppleClick}>新增</button>
		)
	}
}

BtnAdd.PropTypes  ={
	addAppleClick: PropTypes.func.isRequired,
}