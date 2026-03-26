import { useState } from 'react'
import profileImg from '../assets/profile.jpg'
import './Header.css'

export default function Header() {
  const [imgError, setImgError] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-main">
          <div className="avatar">
            {!imgError ? (
              <img
                src={profileImg}
                alt="Othmane TALEBI"
                className="avatar-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="avatar-initials">OT</span>
            )}
          </div>
          <div className="header-info">
            <h1 className="name">Othmane TALEBI</h1>
            <p className="title">Ingénieur d'État en Informatique et Réseaux — Option MIAGE</p>
          </div>
        </div>
        <div className="contact-grid">
          <a href="mailto:talebi.otmane@gmail.com" className="contact-item">
            <span className="contact-icon">✉</span>
            talebi.otmane@gmail.com
          </a>
          <a href="tel:+212762700945" className="contact-item">
            <span className="contact-icon">📱</span>
            +212 762700945
          </a>
          <span className="contact-item">
            <span className="contact-icon">📍</span>
            Maghreb Arabi, Bloc D ext. 176, Kenitra, Maroc
          </span>
          <a href="https://github.com/TalebiOthmane" target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-icon">⌥</span>
            github.com/TalebiOthmane
          </a>
        </div>
      </div>
    </header>
  )
}
