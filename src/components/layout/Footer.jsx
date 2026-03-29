import { footerLinks, siteMeta } from '../../content/siteContent';
import { getLinkProps } from '../../utils/linkProps';

function Footer() {
  return (
    <footer id="footer" className="reveal">
      <div className="footer-inner">
        <div>
          &copy; 2026 {siteMeta.name}. {siteMeta.motto}
        </div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} {...getLinkProps(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
