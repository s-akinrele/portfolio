import React from 'react'
import '../styles/footer.scss'

const Footer = () => {
  const letChat = () => {
    window.open('mailto:akinrelesimi@gmail.com', '_blank');
  }

  return (
    <footer>
      <div className="main">
        <div className="logo">Simi</div>
        <div className="talk">Let's Talk?</div>
        <button onClick={letChat}>Let's Chat</button>
      </div>
      <div className="copyright">&copy; {(new Date()).getFullYear()} Oluwasinmisola Akinrele</div>
    </footer>
  )
}

export default Footer;
