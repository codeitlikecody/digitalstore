import Link from 'next/link';

import MaxWidthWrapper from './MaxWidthWrapper';
import { ModeToggle } from './themeModeToggle';
import { Icons } from './icons';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <div className="bg-secondary sticky z-50 top-0 instet-x-0 h-16">
      <header className="relative bg-secondary">
        <MaxWidthWrapper>
          <div className="border-b border-border">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden z-50 md:ml-8 md:block md:self-stretch">
                <NavItems />
              </div>
              <MaxWidthWrapper>
                <div className="items-right">
                  <ModeToggle />
                </div>
              </MaxWidthWrapper>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
