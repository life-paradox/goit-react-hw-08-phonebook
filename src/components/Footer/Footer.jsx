import { Author, StyledFooter } from 'components/StyledComponents/SC';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        Created by{' '}
        <Author
          href="http://www.linkedin.com/in/pavel-zhydieiev"
          rel="noreferrer"
          target="_blank"
        >
          Pavel Zhydieiev
        </Author>
      </div>
    </StyledFooter>
  );
};

export default Footer;
