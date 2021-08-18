import Layout from "../../../components/UI/Layout";
import Header from "../../../components/UI/Header";
import Footer from "../../../components/UI/Footer";

export default function Login() {
  return (
    <>
      <Layout title="Log in">
        <section className="login-container">
          <Header />
          <section className="form">
            <div className="facebook"></div>
            <div className="google"></div>
          </section>
        </section>
        <Footer />
      </Layout>
    </>
  );
}
