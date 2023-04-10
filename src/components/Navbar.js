import React, { useState } from "react";
import NavItem from "@/components/NavItem";

import { useRouter } from "next/router";

const MENU_LIST = [
  { text: "Staking Club", href: "/pools" },
  { text: "Bridge", href: "/" },
  { text: "LP Locker", href: "/locker" },
  { text: "NFT Staking", href: "/staking" },
];

const Navbar = (props) => {	
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const router = useRouter();  

  return (
		<nav className={`nav`}>		
			<ul className={`${navActive ? "active" : ""} nav__menu-list`}>
				{MENU_LIST.map((menu, idx) => (
					<li
						onClick={() => {
							setActiveIdx(idx);
							setNavActive(false);
						}}
						key={menu.text}
					>
						<NavItem active={router.asPath === menu.href} {...menu} />
					</li>
				))}
			</ul>
		</nav>
  );
};

export default Navbar;