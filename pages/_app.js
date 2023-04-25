import GlobalStyle from "../styles";
import Header from "../components/Header/Header";
import "maplibre-gl/dist/maplibre-gl.css";
import Footer from "../components/Footer/Footer";
import developer from "../components/developer";
import Head from "next/head";
import Favicon from "../components/Favicon/Favicon";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Favicon />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer
        gitHubLink={developer.socials.gitHub}
        linkedInLink={developer.socials.linkedIn}
      />
    </>
  );
}
