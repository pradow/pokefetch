import "../styles/styles.scss";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" && <Header />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
