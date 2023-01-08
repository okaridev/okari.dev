import { FaGithub, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

export const Nav = () => {
  const navLinks = [
    { id: 1, text: 'Collection', href: '' },
    { id: 2, text: 'Community', href: '' },
    { id: 3, text: 'Sponsor', href: '' },
    { id: 4, text: 'Blog', href: '' },
  ];
  return (
    <nav className="relative flex mx-auto items-center justify-between w-full h-16">
      <div >
        <Icon href="https://github.com/okaridev">
          <FaGithub />
        </Icon>
      </div>
      <div>
        {navLinks.map(link => (
            <NavLink key={link.id} href={link.href}>{link.text}</NavLink>
        ))}
      </div>
    </nav>
  );
};

const NavLink = ({
  children,
  target,
  href,
}: {
  target?: React.HTMLAttributeAnchorTarget | undefined;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      className="text-gray-300 duration-300 text-lg hover:text-white ml-4"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

const Icon = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <div className="duration-300 hover:text-gray-200">
      <Link href={href} className="text-3xl" target="_blank">
        {children}
      </Link>
    </div>
  );
};
