import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import "../node_modules/highlight.js/styles/night-owl.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
