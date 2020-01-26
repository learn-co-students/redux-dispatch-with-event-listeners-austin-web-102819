// add code snippets from README
let state;

function reducer(state = { count: 0 }, action) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			return { count: state.count + 1 };
		default:
			return state;
	}
}

let button = document.getElementById('button');

button.addEventListener('click', () => {
	console.log('in');

	dispatch({ type: 'INCREASE_COUNT' });
});

function dispatch(action) {
	state = reducer(state, action);
	render();
}

function render() {
	const container = document.getElementById('container');
	container.innerText = state.count;
}
