export function userReducer(state, action) {
  const { type, value } = action;

  switch (type) {
    case "init":
      console.log(value);
      return {
        ...state,
      };

    case "login":
      console.log(value);
      return {
        ...state,
      };

    case "logout":
      console.log(value);
      return {
        ...state,
      };

    default:
      console.log("ACTION", action);
      throw new Error();
  }
}
