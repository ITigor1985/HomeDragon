import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../app/auth";
import {
  BtnSubmit,
  Form,
  Label,
  MyInput,
} from "../../styles/components/Form/Form.styled";

export const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Почта
          <MyInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Пароль
          <MyInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <BtnSubmit type="submit">Войти</BtnSubmit>
      </Form>
    </div>
  );
};
