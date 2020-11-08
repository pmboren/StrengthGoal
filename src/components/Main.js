import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Of course we are supposed to exercise. Everyone knows that it’s 
            one of those things that our bodies need to be healthy and strong. 
            Unlike getting food, water, and sleep, however, vigorous physical 
            activity is something that we can easily forget about for days.
          </p>
          <p>
            Why don’t we exercise throughout the year? Perhaps we are not being 
            honest with ourselves. We go to the gym wanting to look better, feel 
            better, and be able to do more right away. Then we are disappointed to 
            find that we are still out of shape, exhausted, or too sore to enjoy 
            doing anything. Only those who continue to exercise will see improvements 
            along the way.
          </p>
          {close}
        </article>

        <article
          id="long-term"
          className={`${this.props.article === 'long-term' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Long-term</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            If your goal is to look good in a swimsuit this summer then that is 
            short-term thinking. It may be enough to motivate you to exercise 
            for the next few months. The question becomes whether you will keep 
            exercising after you go to the beach.
          </p>
          <p>
            Pairing your goal with something deeper or more meaningful to you can 
            help.  What is an activity that you like to do? Why do you enjoy it so 
            much? If you knew that exercising each day would allow you to continue 
            to do what you love, would you do it?
          </p>
          {close}
        </article>

        <article
          id="resistance"
          className={`${this.props.article === 'resistance' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resistance</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Exercise that involves lifting weights or using bands is called resistance
            training. This type of exercise helps you develop strength. More importantly, 
            doing resistance exercises each day will produce long-lasting health benefits 
            and allow you to keep doing what you love.
          </p>
          <p>
            Hopefully by now you have a some idea of what a strength goal is. Take the 
            first 20 minutes of the day to do resistance training. Don’t let anything 
            else get in the way of your exercise.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <form name="contact" method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
            <p>
            If you aren't sure how you can get started on your own, please consider sending 
            me a message so that I can help you set and work towards a strength goal.  Thank you.
            </p>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
            </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
