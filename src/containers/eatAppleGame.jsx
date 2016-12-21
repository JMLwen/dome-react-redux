import '../css/base.css';
import React,{Component} from 'react';
import Detail from '../components/detail';
import BtnAdd from '../components/btnAdd';
import AppleList from '../components/appleList';
import { eatApple, addApple } from '../action/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';



class EatAppleGame extends Component{
	render(){
		return (
			<div>
				<Detail addCount={this.props.addCount} eatCount={this.props.eatCount} />
				<AppleList eatAppleClick={this.props.eatClick} addCount={this.props.addCount} />
				<BtnAdd addAppleClick={this.props.addClick} />
			</div>
		)
	}
}


const mapStateToProps= (state)=> {
	return {
		eatCount: state.setAppleCount.eatCount,
		addCount: state.setAppleCount.addCount
	}
}

const mapDispatchToprops = (dispatch )=>{
	return bindActionCreators({
		eatClick: eatApple,
		addClick: addApple
	},dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToprops
)(EatAppleGame)


