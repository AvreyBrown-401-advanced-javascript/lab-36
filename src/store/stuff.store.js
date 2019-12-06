const actions = {};
let initialState = { foo: 'bar' };

const reducer = (state = initialState, action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CHANGE':
      return { foo: Math.random() };

    default:
      return state;
  }
}

actions.changer = payload => {
  return {
    type: 'CHANGE',
    payload: payload,
  };
}

export default reducer;
export {actions};
