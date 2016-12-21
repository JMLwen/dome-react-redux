import '../css/appleList.css';
import React,{Component,PropTypes } from 'react';
export default class AppleList extends Component{
	render(){
		var appleList =[];
		for(let i = 0;i<this.props.addCount;i++){
			appleList.push(<Apple key={i} eatAppleClick={this.props.eatAppleClick} />)
		}
		return (
			<ul className="appleList">
				{appleList}
			</ul>
		)
	}
}
AppleList.PropTypes ={
	appleCount: PropTypes .number.isRequired,
	eating: PropTypes .func.isRequired
}

class Apple extends Component{
	render(){
		return (
			<li>
				<span>苹果*1</span>
				<button onClick={this.props.eatAppleClick}>吃掉</button>
			</li>
		)
	}
}