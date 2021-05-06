import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { fetchReducer } from '../reducers/fetch-reducer';

export function useGetData(INITIAL_API) {
  const [state, dispatch] = useReducer(fetchReducer, {
    code: null,
    title: null,
    message: null,
    isLoading: true,
  });
  const [GET_API, setAPI] = useState(INITIAL_API);

  useEffect(() => {
    let didCancel = false;

    async function post() {
      try {
        const result = await axios.get(GET_API);
        // console.log("Response Result Success: ", result);

        if (!didCancel) {
          dispatch({
            type: 'POST_SUCCESS',
            result: result,
          });
        }
      } catch (error) {
        console.log(error.response);
        dispatch({
          type: 'POST_ERROR',
          result: error.response.data,
        });
      }
    }

    if (GET_API) {
      post();
    }

    return () => {
      didCancel = true;
    };
  }, [GET_API]);

  function getData(NEW_API) {
    setAPI(NEW_API);
  }

  return [state, getData];
}
