import { EAT_APPLE, ADD_APPLE } from '../action/action.js'

export const setAppleCount = (state={eatCount:0,addCount:0},action)=>{
	switch (action.type){
		case EAT_APPLE:
			return {
                eatCount: state.eatCount + 1,
                addCount: state.addCount - 1
			}
		case ADD_APPLE:
			return {
                addCount:state.addCount + 1,
                eatCount:state.eatCount
			}
		default:
			return state
	}
}
