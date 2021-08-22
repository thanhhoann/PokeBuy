import axios from "axios";
import Layout from "../../components/UI/Layout";
import Header from "../../components/UI/Header";
import Hero from "../../components/UI/Hero";
import Footer from "../../components/UI/Footer";

export default function Contact(props) {
  return (
    <>
      <Layout title="Contact">
        <Header />
        <Hero cards={props.hero} />
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const hero = await axios
    .get(
      "https://pokebuy-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json"
    )
    .then((res) => res.data);

  return {
    props: {
      hero,
    },
  };
}
