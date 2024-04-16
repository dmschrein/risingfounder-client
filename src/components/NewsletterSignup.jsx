import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isPopupClosed = localStorage.getItem('isNewsletterPopupClosed');
    if (isPopupClosed) {
      setIsVisible(false);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Thank you for subscribing!', {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        width: "auto", 
        minWidth: "450px", 
        padding: "20px", 
        background: 'linear-gradient(to right, rgba(255, 255, 0, 0.5), rgba(128, 0, 128, 0.5))', // Yellow to purple gradient with 50% transparency
        backgroundSize: 'cover', 
        color: 'white',
        textShadow: '0 0 3px rgba(0, 0, 0, 0.7)'  
      }
    });
    setEmail('');  
  };

  return (
    <div style={{ padding: '100px', minWidth: '450px', fontSize: '16px', background: 'linear-gradient(to right, rgba(255, 255, 0, 0.5), rgba(128, 0, 128, 0.5))' }}>
      <h4 className='text-4xl text-center text-black mb-5'>Ready to Rise?</h4>
      <h4 className='text-2xl text-center text-black mb-10'><em>The Ultimate newsletter to grow your brand.</em></h4>
      <h4 className='text-center text-black mb-10'>You already have everything it takes to become the founder you want to be, but a little reminder never hurt!</h4>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',  
        alignItems: 'center',  
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <input
          type="email"
          placeholder="YOUR EMAIL, PLEASE"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='input-placeholder'
          
        />
        <button type="submit" className='subscribe-button'
        style={{
          background: '#000'
        }}>
          SIGN UP!
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
