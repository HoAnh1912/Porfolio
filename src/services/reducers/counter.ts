export const mouseReducer = (state = "default", action: any) => {
  switch (action.type) {
    case "SMALL":
      return (state = action.payload);
    case "BIG":
      return (state = action.payload);
    default:
      return state;
  }
};

export default mouseReducer;
