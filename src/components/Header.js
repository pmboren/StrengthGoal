import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-tree"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>StrengthGoal</h1>
        <p>
          A way to discover why exercise is for you,
          <br />
          how to get in shape and stay fit for years to come.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro 
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('long-term')
            }}
          >
            Long- term 
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('resistance')
            }}
          >
            Resistance
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
