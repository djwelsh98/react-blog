import { Link, useRouteMatch } from 'react-router-dom';

function Footer() {
  const {url, path} = useRouteMatch();
    return (
      <div className="Footer footer">
        <header className="App-footer">
          <Link to = '/authors'>
            Authors
          </Link>
          <Link to = '/contact'>
          Contact Us
          </Link>
        </header>
      </div>
    );
  }
  
  export default Footer;
  