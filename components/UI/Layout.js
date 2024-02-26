import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title} | PókeBuy.</title>
        <meta
          name="description"
          content="Get your favorite pókemon cards with ease."
        />
        <meta
          name="google-site-verification"
          content="Ot02JW5JSGZiiZo8tR2fMKhHxdInuawmKB1E4QG6afo"
        />
        <link rel="icon" href="./pokecoin.svg" />
      </Head>
      <main className="container">{props.children}</main>
    </>
  );
}
