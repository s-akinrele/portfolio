import React from 'react'
import '../styles/footer.scss'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oluwasinmisola-akinrele' },
  { label: 'Email', href: 'mailto:akinrelesimi@gmail.com' },
  { label: 'Medium', href: 'https://medium.com/@akinrelesimi' },
]

const Footer = () => (
  <footer>
    <div className="inner">
      <nav>
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </nav>
      <p>&copy; {(new Date()).getFullYear()} Oluwasinmisola Akinrele</p>
    </div>
  </footer>
)

export default Footer
