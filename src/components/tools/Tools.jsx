import "./Tools.scss";

const Tools = () => {
  return (
    <section className="tools">
      <div className="container">
        <h2 className="tools__title">Tools</h2>

        <ul className="tools__list">
          <li className="tools__item tool-item">
            <h3 className="tool-item__title">Frameworks and Libraries</h3>

            <ul className="tool-item__list">
              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/react-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">React JS</span>
              </li>

              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/rtk-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">Redux Toolkit</span>
              </li>
            </ul>
          </li>

          <li className="tools__item tool-item">
            <h3 className="tool-item__title">Programming Languages</h3>

            <ul className="tool-item__list">
              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/js-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">JavaScript</span>
              </li>

              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/typescript-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">TypeScript</span>
              </li>
            </ul>
          </li>

          <li className="tools__item tool-item">
            <h3 className="tool-item__title">Markup and styling</h3>

            <ul className="tool-item__list">
              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/html-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">HTML</span>
              </li>

              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/css-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">CSS</span>
              </li>

              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/sass-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">Scss / Sass</span>
              </li>

              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/tailwind-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">Tailwind</span>
              </li>

              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/daisyui-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">Daisy UI</span>
              </li>
            </ul>
          </li>

          <li className="tools__item tool-item">
            <h3 className="tool-item__title">Build Tools and Utilities</h3>

            <ul className="tool-item__list">
              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/vite-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">Vite</span>
              </li>

              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/webpack-icon.svg" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">Webpack</span>
              </li>

              <li className="tool-item__element tool-element">
                <div className="tool-element__circle">
                  <img src="/gulp-icon.png" width={30} height={30}></img>
                </div>
                <span className="tool-element__name">Gulp</span>
              </li>

          
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

// появляется с анимацией
// если навожу на tool item то красиво заполняется сверху вниз фиолетовым

export default Tools;
