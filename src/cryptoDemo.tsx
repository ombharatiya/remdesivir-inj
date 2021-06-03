import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createHmac, randomBytes } from 'crypto';
// import base64url from 'base64url';

function CryptoDemo() {

  if (Buffer.isEncoding('base64url')) {
    // ...
    console.log("Supports")
  }
  else {
    console.log("No")
  }
  
  const secret = 'abcdefg';
  const hash = createHmac('sha256', secret)
                 .update('I love cupcakes')
                 .digest('hex');
  console.log(hash);

  const TOKEN_LENGTH = 32;
  // const code = base64url(randomBytes(TOKEN_LENGTH));
  // console.log("code", code);
  return (
    <div>
      Heyyyy
    </div>
  );
}

export default CryptoDemo;