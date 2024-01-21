import { Outlet } from "react-router-dom";
import '../style/Root.less';

const Root = () => {
  return <>
    <div className="main-wrapper">
      <Outlet />
    </div>

  </>;
};

export default Root;