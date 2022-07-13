import { useReducer } from "react";

const initialState = {
  jobs: [],
  loading: true
};

const ACTIONS = {
  ERROR: "error",
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:

    case ACTIONS.GET_DATA:

    case ACTIONS.ERROR:

    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    jobs: [],
    loading: false,
    error: false
  };
}
