import App, { Container } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
    </Container>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
