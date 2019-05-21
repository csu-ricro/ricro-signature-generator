const App = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.title,
      };
    case 'UPDATE_UNIT_ID':
      return {
        ...state,
        unitId: action.unitId,
      };
    case 'UPDATE_POSITION':
      return {
        ...state,
        position: action.position,
      };
    case 'UPDATE_PHONE':
      return {
        ...state,
        phone: action.phone,
      };
    default:
      return state;
  }
};

export default App;
