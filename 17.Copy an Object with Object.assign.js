// Copy an Object with Object.assign

const defaultState = {
    user: "CamperBot",
    status: "offline",
    friends: "732,982",
    community: "freeCodeCamp"
};
  
const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ONLINE":
      // to enforce state immutability, return a new state object using Object.assign() method
      return Object.assign({}, state, { status: "online" });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: "ONLINE"
  };
};

const store = Redux.createStore(immutableReducer);