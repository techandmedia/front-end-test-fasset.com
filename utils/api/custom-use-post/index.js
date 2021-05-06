import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { fetchReducer } from '../../reducers/fetch-reducer';

export default function usePost() {
  const [state, dispatch] = useReducer(fetchReducer, {
    code: null,
    title: null,
    message: null,
    isLoading: true,
  });
  const [options, setOptions] = useState(null);

  useEffect(() => {
    let didCancel = false;

    async function post() {
      try {
        console.log('OPtions: ', options);
        const result = await axios(options);
        console.log('Response Result Success: ', result);

        if (!didCancel) {
          dispatch({
            type: 'POST_SUCCESS',
            result: result.data,
          });
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          if (error.response.status === 401) {
            dispatch({
              type: 'UNAUTHORIZED',
              result: error.response,
            });
          } else {
            dispatch({
              type: 'POST_ERROR',
              result: error.response.data,
            });
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log('Error', error.message);
        }
      }
    }

    if (options !== null || !options) {
      console.log('OPtions: ', options);
      post();
    }

    return () => {
      didCancel = true;
    };
  }, [options]);

  function postData(params) {
    setOptions(params);
  }

  return [state, postData];
}
