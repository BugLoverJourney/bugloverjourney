import {Link, Outlet} from "react-router-dom";
import '../style/Root.less';

const Root = () => {
  return <>
    <header>
      <div className="container">
      <nav>
        <ul>
          <li><Link to={'/Home'}>Home</Link></li>
          <li><Link to={'/About'}>About</Link></li>
          <li><Link to={'/Projects'}>Projects</Link></li>
        </ul>
      </nav>
      </div>
    </header>
    <div className="main-wrapper">
      <Outlet />
    </div>
    
  </>;
};

export default Root;