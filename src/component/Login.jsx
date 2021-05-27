import React from 'react';
import Button from './Button';
import Input from './Input';

function LoginContainer(){
    return <div className="container">
    <h1>Hello</h1>
    <LoginForm />
  </div>
}

function LoginForm(){
    return <form className="form">
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    <Button type="submit" text="Login"></Button>
  </form>
}

export default LoginContainer;