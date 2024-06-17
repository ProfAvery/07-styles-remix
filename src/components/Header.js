import CoffeeLogo from '../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="flex shadow-[0px_9px_13px_rgb(0_0_0_/_5%)] items-center mb-2.5 px-5 py-0 md:px-[50px] md:py-0">
      <img className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]" src={CoffeeLogo} alt="coffee logo" />
      <h1 className="text-4xl font-bold text-[#674836] ml-[15px]">Code Café</h1>
    </header>
  );
}

export default Header;
