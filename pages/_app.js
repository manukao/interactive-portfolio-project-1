import GlobalStyle from "../styles";
import "maplibre-gl/dist/maplibre-gl.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
