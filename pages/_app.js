import GlobalStyle from "../styles";
import Header from "../components/Header/Header";
import "maplibre-gl/dist/maplibre-gl.css";
import Footer from "../components/Footer/Footer";
import developer from "../components/developer";
import Head from "next/head";
import Favicon from "../components/Favicon/Favicon";
import Sidebar from "../components/SideBar/SideBar";

import { Bilbo_Swash_Caps } from "@next/font/google";

const inter = Bilbo_Swash_Caps({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Head>
        <Favicon />
      </Head>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Component {...pageProps} />
      <Footer
        gitHubLink={developer.socials.gitHub}
        linkedInLink={developer.socials.linkedIn}
      />
    </main>
  );
}
