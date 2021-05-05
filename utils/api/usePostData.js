import { useState, useEffect } from "react";
import usePost from "./custom-use-post";

const URL = "https://api.coingecko.com/api/v3/";

export function usePostData(initialAPI, initialParams) {
  const [options, setOptions] = useState(null);
  const [state, postData] = usePost();

  useEffect(() => {
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
