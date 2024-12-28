import React, { useState } from 'react';

// Reusable Input Component
const InputField = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius:'10px' }}
  />
);

// Reusable Button Component
const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{ padding: '10px', backgroundColor: 'orange', color: 'white', border: 'none', cursor: 'pointer',  width:'107%'}}
  >
    {text}
  </button>
);

// Login Form Component
const Login = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logged in with Username: ${username}`);
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center', padding:'50px 100px 100px 475px '}}>
      <div style={{color:'orange'}}>
      <h2>Food Recipe</h2>
      <h5>Sign in</h5>
      </div>
      <InputField type="email" placeholder="example@mail.com" value={username} onChange={setUsername} />
      <InputField type="password" placeholder="" value={password} onChange={setPassword} />
      <Button text="sign in" onClick={handleLogin} />
      <p>
        Don't have an account?{' '}
        <span style={{ color: 'orange', cursor: 'pointer' }} onClick={onSwitchToRegister}>
          sign up
        </span>
      </p>
    </div>
  );
};

// Registration Form Component
const RegistrationForm = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Registered with Username: ${username}, Email: ${email}`);
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center', padding:'50px 100px 100px 475px ' }}>
      <div style={{color:'orange'}}>
      <h2>Food Recipe</h2>
      <h5>Sign up</h5>
      </div>
      
      <InputField type="email" placeholder="example@mail.com" value={email} onChange={setEmail} />
      <InputField type="password" placeholder="" value={password} onChange={setPassword} />
      <InputField
        type="password"
        placeholder=""
        value={confirmPassword}
        onChange={setConfirmPassword}
      />
      <Button text="Sign up" onClick={handleRegister} />
      <p>
        Already have an account?{' '}
        <span style={{ color: 'orange', cursor: 'pointer' }} onClick={onSwitchToLogin}>
          sign in
        </span>
      </p>
    </div>
  );
};

// Main Component
const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      {isLogin ? (
        <Login onSwitchToRegister={() => setIsLogin(false)} />
      ) : (
        <RegistrationForm onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default LoginForm;
