import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar"

const Header = () => {

  return (
    <>
      <header className="header">
				<div className="header-inner">
					<Link className="header-logo" href="/">
							<Image src="/assets/imgs/logo.gif" alt="logo" height={80} width={80} />
					</Link>
					<Navbar />
					<div className="actions">
						<div className="wallet-connect">
							<div id="connectWallet" className="wallet-connect-btn glow-on-hover" data-value="connect">Connect Wallet</div>
						</div>
					</div>
				</div>
      </header>
    </>
  );
};

export default Header;
