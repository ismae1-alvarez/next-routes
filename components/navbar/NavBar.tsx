import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";


const navItem= [
  { path: "/about", title: "About" },
  { path: "/pricing", title: "Pricing" },
  { path: "/contact", title: "contact" },

];

export default function NavBart() {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        
        <Link href={'/'} className="flex items-center">
          <HomeIcon className="mr-2"/>
          <span>
              Home
          </span>
        </Link>

        <div className="flex flex-1"></div>

        {navItem.map(item =>(
          <ActiveLink
            key={ item.path }
            {...item}
          />
        ))
        }

    </nav>
  )
}