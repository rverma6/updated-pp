import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <img src="/path/to/profile-image.jpg" alt="Your Name" className="profile-pic"/>
      <h2 className="profile-title">hi, i'm rayva verma</h2>
      <p className="profile-description">
        I'm a frontend engineer who loves to craft beautiful products on the web.
        I'm currently working as a senior frontend engineer at 
        <a href="https://your-company.com">@YourCompany</a>, 
        where I handle all the frontend infra, platform, and core feature development.
        I've previously worked with amazing startups like 
        <a href="https://razorpay.com">@Razorpay</a> and 
        <a href="https://innovaccer.com">@Innovaccer</a>. I love to build projects 
        and experiment with new stuff in tech. Currently, I'm exploring AI / LLMs 
        and <a href="https://github.com/your-github/framer-motion">Framer Motion</a>.
      </p>
    </div>
  );
};

export default Profile;
