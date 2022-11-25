export const CREATE_WILL = "CREATE_WILL";
export const REMOVE_WILL = "REMOVE_WILL";

export const createWill = (will) => {
  return {
    type: CREATE_WILL,
    payload: will,
  };
};

export const removeWill = (will) => {
  return {
    type: REMOVE_WILL,
    payload: will,
  };
};
