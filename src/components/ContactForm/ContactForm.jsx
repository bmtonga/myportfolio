import "./ContactForm.css";
import { useReducer } from "react";
import { Arrow } from "../Shared/Shared.jsx";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState = {
  values: { name: "", email: "", subject: "", message: "", company: "" },
  errors: {},
  status: "idle", // idle | submitting | success | error
  errorMessage: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: undefined },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SUBMIT_START":
      return { ...state, status: "submitting", errorMessage: "" };
    case "SUBMIT_SUCCESS":
      return { ...initialState, status: "success" };
    case "SUBMIT_ERROR":
      return { ...state, status: "error", errorMessage: action.message };
    default:
      return state;
  }
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { values, errors, status, errorMessage } = state;
  const isSubmitting = status === "submitting";

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "FIELD_CHANGE", field: name, value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    // Bots tend to fill hidden fields; humans never see this one.
    if (values.company) {
      dispatch({ type: "SUBMIT_SUCCESS" });
      return;
    }

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors: validationErrors });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      dispatch({
        type: "SUBMIT_ERROR",
        message:
          "The contact form isn't configured yet. Please email me directly instead.",
      });
      return;
    }

    dispatch({ type: "SUBMIT_START" });
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name,
          email: values.email,
          subject: values.subject || `New message from ${values.name}`,
          message: values.message,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      dispatch({
        type: "SUBMIT_ERROR",
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <small className="contact-form-eyebrow">SEND A MESSAGE</small>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Racheal Mandona"
            value={values.name}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="cf-name-error"
          />
          <p id="cf-name-error" className="form-error" aria-live="polite">
            {errors.name || ""}
          </p>
        </div>

        <div className="form-field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="racheal.mandona@example.com"
            value={values.email}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="cf-email-error"
          />
          <p id="cf-email-error" className="form-error" aria-live="polite">
            {errors.email || ""}
          </p>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="cf-subject">
          Subject <span className="optional">(optional)</span>
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          autoComplete="off"
          placeholder="Let's collaborate on a project"
          value={values.subject}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <div className="form-field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="Tell me a bit about what you have in mind..."
          value={values.message}
          onChange={handleChange}
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby="cf-message-error"
        />
        <p id="cf-message-error" className="form-error" aria-live="polite">
          {errors.message || ""}
        </p>
      </div>

      {/* Honeypot: hidden from sighted users, skipped by keyboard tabbing. */}
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <div className="links">
        <button
          className="action-control primary"
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="form-spinner" aria-hidden="true" /> SENDING...
            </>
          ) : (
            <>
              SEND MESSAGE <Arrow />
            </>
          )}
        </button>
      </div>

      <div className="form-status" role="status" aria-live="polite">
        {status === "success" && (
          <p className="form-success">
            Thanks for reaching out — your message has been sent and I&apos;ll reply soon.
          </p>
        )}
        {status === "error" && <p className="form-error">{errorMessage}</p>}
      </div>
    </form>
  );
}
