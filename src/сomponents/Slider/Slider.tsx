import "./slider.scss";

export const Slider = () => {
  return (
    <main className="slider">
      <h1 className="slider__title">The Power of Simplicity</h1>
      <p className="slider__description">
        Instead of spending time searching for the right app, our AI will bring
        the right app to you.
      </p>
        <button className="slider__btn">
          <span className="btn__title">Learn</span>
        </button>
      <ul className="slider__dots">
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot active"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
      </ul>
    </main>
  );
};
