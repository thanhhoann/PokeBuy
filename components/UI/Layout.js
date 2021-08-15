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
        <link rel="icon" href="./pokecoin.svg" />
      </Head>
      <main className="container">{props.children}</main>
    </>
  );
}
