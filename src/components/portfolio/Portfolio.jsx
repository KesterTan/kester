import React from 'react'
import './portfolio.css'
import blockMarketImg from '../../assets/BlockMarket.PNG'
import dailyBugleImg from '../../assets/dailyBugle.svg'
import telegramImg from '../../assets/telegram.png'
import reversiImg from '../../assets/reversi.png'
import howYaImg from '../../assets/HowYa.PNG'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src={howYaImg} alt="HowYa" />
          </div>
          <h3>HowYa</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="https://youtu.be/3xzHkZ_wK5A" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src={reversiImg} alt="HowYa" />
          </div>
          <h3>Reversi.AI</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="https://youtu.be/-TZCuFpHpkI" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src={blockMarketImg} alt="Block Market" />
          </div>
          <h3>Block Market</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src={telegramImg} alt="Telegram Bots" />
          </div>
          <h3>Telegram Bots</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-item-image">
            <img src={dailyBugleImg} alt="Daily Bugle" />
          </div>
          <h3>The Daily Bugle</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio