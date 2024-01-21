import Input from "@comp/Input";
import '../style/Menu.less';

const Menu = () => {
  return <>
    <header>
      <div className="container">
        <h1>Anime Pexeso</h1>
      </div>
    </header>
    <div className="main-menu-container">
      <div className="options">

        <span>Game size:</span>
        <input type="text" />
        <span>Number of players:</span>
        <input type="text" />

        <span>Turn limit:</span>
        <input type="text" value={2} />

        <button>Start</button>
      </div>
    </div>
  </>;
};

export default Menu;