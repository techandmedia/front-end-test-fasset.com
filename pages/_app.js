import { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import GlobalProvider, { UserContext } from '../utils/context/Global-Context';
import { useCheckServer } from '../utils/api/custom-use-post/server-check';
import { AppLayout } from '../components/layout';

function App({ Component, pageProps }) {
  const { dispatchUser } = useContext(UserContext);
  const [statusServer] = useCheckServer('ping');

  useEffect(() => {
    if (statusServer === 'ok') {
      dispatchUser({
        type: 'init',
        value: { statusServer: statusServer },
      });
    }
  }, [statusServer]);

  if (statusServer === '0') {
    return <AppLayout>Checking your server, please wait...</AppLayout>;
  }

  if (statusServer === 'ok') {
    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    );
  }

  return <AppLayout>{statusServer}</AppLayout>;
}

export default function Wrapper(props) {
  return (
    <GlobalProvider>
      <App {...props} />
    </GlobalProvider>
  );
}
