import GlobalStyle from "../styles";
import HeaderContainer from "../components/Header/Header";
import "maplibre-gl/dist/maplibre-gl.css";
import Footer from "../components/Footer/Footer";
import developer from "../components/developer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <Component {...pageProps} />
      <Footer
        gitHubLink={developer.socials.gitHub}
        linkedInLink={developer.socials.linkedIn}
      />
    </>
  );
}
