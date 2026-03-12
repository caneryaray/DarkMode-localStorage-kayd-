import React, { useState, useEffect, useRef } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialForm = {
  email: '',
  password: '',
};

export default function Login() {
  const history = useHistory();

  // 1️⃣ localStorage'dan email al
  const savedEmail = localStorage.getItem('email') || '';

  // 2️⃣ form state
  const [form, setForm] = useState({ ...initialForm, email: savedEmail });

  // 3️⃣ input ref
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // 4️⃣ doğru focus ayarlama
  useEffect(() => {
    if (savedEmail && passwordRef.current) {
      passwordRef.current.focus(); // email kayıtlı ise password alanına focus
    } else if (!savedEmail && emailRef.current) {
      emailRef.current.focus(); // email yoksa email alanına focus
    }
  }, [savedEmail]);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? event.target.checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) return;

    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((res) => {
        const user = res.data.find(
          (item) => item.password === form.password && item.email === form.email
        );
        if (user) {
          // ✅ login başarılı, email kaydet
          localStorage.setItem('email', form.email); // ← email burada kaydediliyor
          setForm({ ...initialForm, email: form.email });
          history.push('/main');
          toast.success(`Merhaba ${user.name}, tekrar hoş geldin.`);
        } else {
          history.push('/error');
          toast.error('Girdiğiniz bilgilerle bir kullanıcı bulamadık.');
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          innerRef={emailRef} // reactstrap kullanıyorsan innerRef
          data-testid="email-input"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          innerRef={passwordRef} // reactstrap kullanıyorsan innerRef
          data-testid="password-input"
        />
      </FormGroup>
      <FormGroup className="text-center p-4">
        <Button disabled={!form.email || !form.password} color="primary">
          Sign In
        </Button>
      </FormGroup>
    </Form>
  );
}
