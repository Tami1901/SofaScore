import React, { useState } from "react";
import * as Base from "../components/Base";
import { Input, Form } from "../components/Form";
import Button from "../components/Button";

const Page: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    fetch("https://private-leagues-api.herokuapp.com/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setUserId(data.user.id);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return userId ? (
    <h1>
      Hello {username} with ID {userId}
    </h1>
  ) : (
    <Base.Div className="container">
      <Form onSubmit={onSubmit}>
        <Base.H1>Login</Base.H1>

        <Base.Div className="txt">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Base.Div>
        <Base.Div className="txt">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Base.Div>

        <Button type="submit" className="button" disabled={loading}>
          Submit
        </Button>
        {error && <h3>{error}</h3>}
      </Form>
    </Base.Div>
  );
};

export default Page;
