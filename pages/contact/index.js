import axios from "axios";
import Layout from "../../components/UI/Layout";
import Header from "../../components/UI/Header";
import Hero from "../../components/UI/Hero";
import Footer from "../../components/UI/Footer";

export async function getStaticProps(context) {
  const hero_cards = await axios
    .get(process.env.FIREBASE_DB_URL + "hero_cards.json")
    .then((res) => res.data.data);

  return {
    props: {
      hero_cards,
    },
  };
}

export default function Contact(props) {
  return (
    <>
      <Layout title="Contact">
        <Header />
        {/* <Hero cards={props.hero} /> */}
        <Footer />
      </Layout>
    </>
  );
}

