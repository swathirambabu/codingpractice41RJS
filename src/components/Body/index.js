// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="body-header-text">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
                <li className="item">Item 5</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="body-header-text">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet,consecteur adipiscing elit, sed do
                eiusmod tempor incididunt ur labore et dolore magna aliqua. Ut
                enim amd minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left-navbar">
              <h1 className="body-header-text">Left Navbar Menu</h1>
              <div className="ad-box-container">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
