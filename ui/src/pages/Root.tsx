import { Outlet } from "react-router-dom";
import '../style/Root.less';

const Root = () => {
  return <>
    <header>
      <div className="container">
      </div>
    </header>
    <div className="main-wrapper">
      <Outlet />
    </div>

  </>;
};

export default Root;