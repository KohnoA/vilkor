import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  additionalClasses?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export default function Button({ children, additionalClasses, href, onClick }: ButtonProps) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={`${styles.button} ${additionalClasses ?? ''}`}
      onClick={onClick}
      {...(href ? { href } : {})}
    >
      {children}
    </Component>
  );
}
