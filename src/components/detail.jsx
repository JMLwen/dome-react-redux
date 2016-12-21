import '../css/detail.css';
import React,{Component} from 'react';
export default class Detail extends Component{
	render(){
		return(
			<ul className="page-detail">
				<li>
					现在有{this.props.addCount}苹果
				</li>
				<li>
					已吃了{this.props.eatCount}苹果
				</li>
			</ul>
		)
	}
}