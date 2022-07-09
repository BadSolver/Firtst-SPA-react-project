import React from 'react'
import './slider.scss'

export const Slider = () => {
  return (
    <div className='slider__container'>
      <h1 className='slider_title'>The Power of Simplicity</h1>
      <p className='slider_description'>Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
      <div className="slider__btn">
        <button className='slide_btn'><span className='btn_title'>Learn</span></button>
      </div>
      <div className='slider__dots'>
        <div className='slider_dot_1'></div>
        <div className='slider_dot_1'></div>
        <div className='slider_dot_1 active'></div>
        <div className='slider_dot_1'></div>
        <div className='slider_dot_1'></div>
      </div>
    </div>
  )
}