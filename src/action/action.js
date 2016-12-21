export const EAT_APPLE = 'EAT_APPLE';
export const ADD_APPLE = 'ADD_APPLE';

export function eatApple(){
	return {
		type: EAT_APPLE,
	}
}
export function addApple(){
	return {
		type: ADD_APPLE,
	}
}
