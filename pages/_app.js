import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-w-screen min-h-screen bg-body-background">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
