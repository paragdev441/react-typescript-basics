import { type PropsWithChildren, type FC } from 'react';

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} />  We can also use this but below is a smart way*/}
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
