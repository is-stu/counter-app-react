export const increaseCounterAction = () => ({
    type: "INCREASE_COUNTER",
    payload: 1
  });
  
  export default (state = 0, action) => {
    switch (action.type) {
      case "INCREASE_COUNTER":
        return {
          ...state,
          counter: state.counter + action.payload
        };
      default:
        return state;
    }
  };