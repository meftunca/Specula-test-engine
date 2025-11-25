import { useState, type FormEvent } from "react";

/**
 * Mock Login Component for testing the parser
 */
export function MockLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div
      className="login-container"
      data-test-context="login"
      data-test-scenario="happy-path"
      data-test-route="/login"
    >
      <h2>Login</h2>

      {success ? (
        <div
          data-test-id="success-message"
          data-test-expect="visible; text:Welcome"
        >
          Welcome!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-test-id="email"
            data-test-step="type:user@example.com"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-test-id="password"
            data-test-step="type:123456"
          />

          <button
            type="submit"
            data-test-id="submit"
            data-test-step="click"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}
