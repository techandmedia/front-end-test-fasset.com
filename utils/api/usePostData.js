import { useState, useEffect } from "react";
import usePost from "./custom-use-post";

const URL = "https://api.coingecko.com/api/v3/";

export function usePostData(initialAPI, initialParams) {
  const [options, setOptions] = useState(null);
  const [state, postData] = usePost();

  useEffect(() => {
    // const initToken = localStorage.getItem("token");
    // setToken(initToken);
    // if (initToken && initialAPI) {
    //   setOptions({ api: initialAPI, params: initialParams });
    // }

    if (initialAPI) {
      setOptions({ api: initialAPI, params: initialParams });
    }
  }, []);

  useEffect(() => {
    if (options !== null) {
      const { api, params } = options;

      const newParams = {
        method: "get",
        url: URL + api,
        data: params,
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      postData(newParams);
      setOptions(null);
    }
  }, [options]);

  function getParams(api, params) {
    setOptions({ api, params });
  }

  return [state, getParams];
}
