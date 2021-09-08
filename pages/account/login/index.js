import React, { useContext, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Layout from "../../../components/UI/Layout";
import Header from "../../../components/UI/Header";
import Footer from "../../../components/UI/Footer";
import { useMedia } from "use-media";
import AuthContext from "../../../store/auth-context";
import { useRouter } from "next/dist/client/router";

export default function Login() {
  const router = useRouter();
  const laptopL = useMedia({ minWidth: "1024px" });
  const [error, setError] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDnsMSC8A0fmSF4ZDBFepkffC4Wvp4c_vE",
        {
          method: "POST",
          body: JSON.stringify({
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
          const expTime = new Date(
            new Date().getTime() + Number(data.expiresIn * 1000)
          );
          authContext.login(data.idToken, data.displayName, expTime);
          router.replace("/");
        } else {
          let errorMessage = data.error.message
            .replace(/_/gi, " ")
            .toLowerCase();
          setTimeout(() => {
            setTimeout(() => {
              setError("");
            }, 2000);
            setError(errorMessage);
          });
        }
      });
    }
  };

  return (
    <>
      <Layout title="Log in">
        <section className="login-container">
          <Header />
          <div className="form">
            <section>
              <h1 style={{ fontSize: "2rem" }}>
                {forgotPassword ? "Reset password" : "Login"}
              </h1>
            </section>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: laptopL && "30%" }}
            >
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
              {error && !errors.email && <p>{error}</p>}
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
                    min: 5,
                  })}
                />
              )}

              <button className="btn" type="submit">
                {forgotPassword ? "Submit" : "Sign in"}
              </button>
              <section className="extend">
                {!forgotPassword ? (
                  <>
                    <Link href="/explore">
                      <a>
                        <p>Wanna explore more ? 👀</p>
                      </a>
                    </Link>
                    <p onClick={() => setForgotPassword(true)}>
                      Forgot your password ? 😖
                    </p>
                  </>
                ) : (
                  <p onClick={() => setForgotPassword(false)}>Cancel</p>
                )}
              </section>
            </form>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
}
