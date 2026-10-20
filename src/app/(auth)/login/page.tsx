"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const API_BASE_URL =
  process.env.NEXT_PUBLIC_BPL_HUB_API_PROD ||
  process.env.NEXT_PUBLIC_BPL_HUB_API_LOCAL;

interface LoginValues {
  email: string;
  password: string;
}

const initialValues: LoginValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: LoginValues) => {
    setServerError("");

    if (!API_BASE_URL) {
      setServerError("Server configuration is missing. Please try again later.");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL.replace(/\/+$/, "")}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: values.email.trim(),
            password: values.password,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setServerError(
          data.message || "Unable to sign in. Check your credentials."
        );
        return;
      }

      router.replace("/dashboard");
    } catch {
      setServerError(
        "Unable to connect to the server. Please check your connection."
      );
    }
  };

  return (
    <main className="auth-container">
      <div className="auth-background" aria-hidden="true">
        <div className="auth-glow auth-glow-one" />
        <div className="auth-glow auth-glow-two" />
        <div className="auth-grid" />
      </div>

      <section className="auth-layout">
        <header className="auth-header">
          <Link href="/" className="auth-brand" aria-label="BPL HUB home">
            <span className="auth-brand-mark">B</span>
            <span className="auth-brand-copy">
              <span className="auth-brand-name">BPL HUB</span>
              <span className="auth-brand-caption">ADMINISTRATION</span>
            </span>
          </Link>

          <div className="auth-header-status">
            <span className="auth-status-dot" />
            Secure portal
          </div>
        </header>

        <div className="auth-main">
          <div className="auth-intro">
            <span className="auth-eyebrow">
              <span className="auth-eyebrow-line" />
              ADMIN CONTROL CENTER
            </span>

            <h1 className="auth-heading">
              Your league.
              <br />
              <span>Your command.</span>
            </h1>

            <p className="auth-description">
              Manage teams, matches, players, auctions, and everything that
              powers the Bhalawani Premier League.
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature">
                <span className="auth-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <strong>Protected access</strong>
                  <small>Authorized administrators only</small>
                </span>
              </div>

              <div className="auth-feature">
                <span className="auth-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3.5"
                      y="4"
                      width="17"
                      height="16"
                      rx="2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M7.5 15v-3m4 3V8m4 7v-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>
                  <strong>One central dashboard</strong>
                  <small>Everything your league needs</small>
                </span>
              </div>
            </div>
          </div>

          <section className="auth-card" aria-labelledby="auth-title">
            <div className="auth-card-top">
              <div className="auth-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 10v5m0-8h.01"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <span className="auth-card-label">ADMIN SIGN IN</span>
            </div>

            <h2 id="auth-title" className="auth-title">
              Welcome back
            </h2>

            <p className="auth-subtitle">
              Sign in to continue to your dashboard.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="auth-form" noValidate>
                  <div className="auth-group">
                    <label htmlFor="email" className="auth-label">
                      Email address
                    </label>

                    <div className="auth-input-wrap">
                      <svg
                        className="auth-input-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="m4 7 8 6 8-6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <Field
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="username"
                        placeholder="admin@example.com"
                        className="auth-input"
                        aria-describedby="email-error"
                      />
                    </div>

                    <ErrorMessage
                      name="email"
                      render={(message) => (
                        <p
                          id="email-error"
                          className="auth-error"
                          role="alert"
                        >
                          {message}
                        </p>
                      )}
                    />
                  </div>

                  <div className="auth-group">
                    <label htmlFor="password" className="auth-label">
                      Password
                    </label>

                    <div className="auth-input-wrap">
                      <svg
                        className="auth-input-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="4"
                          y="10"
                          width="16"
                          height="11"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M8 10V7a4 4 0 0 1 8 0v3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <circle cx="12" cy="15" r="1.2" fill="currentColor" />
                      </svg>

                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        className="auth-input auth-input-password"
                        aria-describedby="password-error"
                      />

                      <button
                        type="button"
                        className="auth-password-toggle"
                        onClick={() => setShowPassword((current) => !current)}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        aria-pressed={showPassword}
                      >
                        {showPassword ? (
                          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                              d="M3 3l18 18M10.6 10.7a2 2 0 0 0 2.7 2.7"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.3 2.2-2.5 3.3M6.2 6.2C4.3 7.5 3 9.3 2.5 12c1 2.5 4.5 7 9.5 7 1.1 0 2.2-.3 3.2-.7"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                              d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="3"
                              stroke="currentColor"
                              strokeWidth="1.6"
                            />
                          </svg>
                        )}
                      </button>
                    </div>

                    <ErrorMessage
                      name="password"
                      render={(message) => (
                        <p
                          id="password-error"
                          className="auth-error"
                          role="alert"
                        >
                          {message}
                        </p>
                      )}
                    />
                  </div>

                  {serverError && (
                    <div className="auth-server-error" role="alert">
                      <span aria-hidden="true">!</span>
                      {serverError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="auth-button"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? "Signing you in..." : "Sign in to dashboard"}
                    </span>

                    {!isSubmitting && (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M5 12h14m-6-6 6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    {isSubmitting && (
                      <span className="auth-spinner" aria-hidden="true" />
                    )}
                  </button>

                  <p className="auth-security-note">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect
                        x="5"
                        y="10"
                        width="14"
                        height="11"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M8 10V7a4 4 0 0 1 8 0v3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                    Your session is protected
                  </p>
                </Form>
              )}
            </Formik>

            <div className="auth-card-footer">
              <span className="auth-footer-line" />
              <span>AUTHORIZED PERSONNEL ONLY</span>
              <span className="auth-footer-line" />
            </div>
          </section>
        </div>

        <footer className="auth-footer">
          <span>© {new Date().getFullYear()} BPL HUB</span>
          <span className="auth-footer-divider" />
          <span>Bhalawani Premier League</span>
          <span className="auth-footer-right">OFFICIAL ADMIN PORTAL</span>
        </footer>
      </section>
    </main>
  );
}
