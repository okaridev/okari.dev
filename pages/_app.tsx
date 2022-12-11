import type { AppProps } from "next/app";
import { Rosarivo } from "@next/font/google";
import "../styles/globals.css";

const rosarivo = Rosarivo({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rosarivo.className}>
      <Component {...pageProps} />
    </main>
  );
}
