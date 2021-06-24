import logo from "../../img/bepark-app-icon.png";

function Header() {
  return (
    <header className="border-b bg-blue shadow-lg px-4 py-5 md:flex md:flex-col md:items-center md:h-full">
      <img src={logo} className="w-10" alt="logo" />
    </header>
  );
}
export default Header;
