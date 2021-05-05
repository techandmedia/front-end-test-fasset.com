import { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";
import GlobalProvider, { UserContext } from "../utils/context/Global-Context";
import { useCheckServer } from "../utils/api/custom-use-post/server-check";

function App({ Component, pageProps }) {
  const { user, dispatchUser } = useContext(UserContext);
  const [statusServer] = useCheckServer("ping");

  useEffect(() => {
    if (statusServer === "ok") {
      dispatchUser({
        type: "init",
        value: { statusServer },
      });
    }
  }, [statusServer]);

  if (statusServer === "0") {
    return "Checking your server, please wait...";
  }

  if (statusServer === "ok") {
    return <Component {...pageProps} user={user} />;
  }

  return statusServer;
}

export default function Wrapper(props) {
  return (
    <GlobalProvider>
      <App {...props} />
    </GlobalProvider>
  );
}
