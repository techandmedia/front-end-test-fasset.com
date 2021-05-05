import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://api.coingecko.com/api/v3/";

export function useCheckServer(CHECK_API) {
  const [state, setServerState] = useState("0");

  useEffect(() => {
    let didCancel = false;

    async function post() {
      try {
        const options = {
          method: "get",
          url: URL + CHECK_API,
          headers: {
            "Content-Type": "application/json",
          },
        };
        const result = await axios(options);

        if (!didCancel) {
          if (result.status === 200) setServerState("ok");
        } else {
          setServerState("It seems you are not connected to the internet");
        }
      } catch (error) {
        console.log(error.response);
        setServerState(
          "It seems there'some kind of error. If you're the administrator of this website, please fix this asap"
        );
      }
    }

    post();

    return () => {
      didCancel = true;
    };
  }, []);

  return [state];
}
