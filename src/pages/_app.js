import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <title>James Ohsako</title>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
