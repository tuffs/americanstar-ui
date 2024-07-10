import Link from 'next/link';
import Image from 'next/image';
import americanStarLogo from '@/app/images/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return ( 
    <>
      <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
        <Link
          href="/"
        >
          <Image
            src={americanStarLogo}
            alt="American Star"
            width={40}
          />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback className="text-black">
                DK
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="dropdown-items">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="dropdown-items">Profile</DropdownMenuItem>
            <DropdownMenuItem className="dropdown-items">Billing</DropdownMenuItem>
            <DropdownMenuItem className="dropdown-items">Team</DropdownMenuItem>
            <DropdownMenuItem className="dropdown-items">Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>      
   );
}

export default Navbar;