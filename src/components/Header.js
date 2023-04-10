import Image from "next/image";
import Link from "next/link";

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import Navbar from "@/components/Navbar"

const FROM_DROPDOWN_LIST = [
  { text: 'Ethereum', iconUrl: '/assets/imgs/eth-circle-logo.svg', val: 'ETH' },
  { text: 'Binance Smart Chain', iconUrl: '/assets/imgs/bscLogo.svg', val: 'BSC' }
];

const Header = () => {

  return (
    <>
      <header className="header">
				<div className="header-inner">
					<Link className="header-logo" href="/">
							<Image src="/assets/imgs/logo.gif" alt="logo" height={80} width={80} />
					</Link>
					<Navbar />
					<div className="actions d-flex">
						<Select className="select-options"
							defaultValue="ETH"
							sx={{
								minWidth: 256,
							}}
							slotProps={{
                listbox: {
                  sx: {
                    border: '1px solid #772eda',
                    overflow: 'auto'
                  }
                }
              }}
						>
							{FROM_DROPDOWN_LIST.map((opt) => (
                <Option className='list-item-sm' key={ opt.val } value={ opt.val }>
                  <Image src={ opt.iconUrl } width={32} height={32} alt={ opt.text } /> { opt.text }
                </Option>
              ))}						
						</Select>

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
