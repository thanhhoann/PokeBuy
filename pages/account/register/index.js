import React, { useContext, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import Layout from "../../../components/UI/Layout";
import Header from "../../../components/UI/Header";
import Footer from "../../../components/UI/Footer";
import { useMedia } from "use-media";
import { useRouter } from "next/dist/client/router";
import AuthContext from "../../../store/auth-context";

export default function Login() {
  const router = useRouter();
  const laptopL = useMedia({ minWidth: "1024px" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    if (data) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDnsMSC8A0fmSF4ZDBFepkffC4Wvp4c_vE",
        {
          method: "POST",
          body: JSON.stringify({
            displayName: data.name,
            email: data.email,
            password: data.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setIsLoading(false);
          authContext.login(data.idToken, data.displayName);
          router.replace("/");
        } else {
          setIsLoading(false);
          setError(data.error.message);
        }
      });
    }
  };

  return (
    <>
      <Layout title="Log in">
        <section className="login-container">
          <Header />
          <div className="form" style={{ marginTop: "150px" }}>
            <section>
              <h1 style={{ fontSize: "2rem" }}>Create Account</h1>
            </section>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: laptopL && "30%" }}
            >
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                  min: 3,
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}

              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                  min: 3,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email must contains a @",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}

              {/* password */}
              {!forgotPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                    min: {
                      value: 6,
                      message: "Weak password 🥲 Must more than 6 characters.",
                    },
                  })}
                />
              )}
              {(errors.password && <p>{errors.password.message}</p>) ||
                (error && <p>{error.replace(/_/gi, " ").toLowerCase()}</p>)}

              <button className="btn" type="submit">
                {isLoading ? (
                  <Loader
                    type="ThreeDots"
                    color="white"
                    height={30}
                    width={30}
                    timeout={3000}
                  />
                ) : (
                  "Create"
                )}
              </button>
              <section className="extend">
                <Link href="/explore">
                  <a>
                    <p>Wanna explore more ? 👀</p>
                  </a>
                </Link>
                <Link href="/account/login">
                  <a>
                    <p>Log in 🚀</p>
                  </a>
                </Link>
              </section>
            </form>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
}
