import "./Button.scss";
import { ButtonHTMLAttributes, ComponentType, ReactHTML } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  transparent?: boolean;
  hasPadding?: boolean;
  withoutBorder?: boolean;
  withoutHover?: boolean;
  component?: ComponentType<any> | keyof ReactHTML;
  isLink?: boolean;
  to?: string;
}

export const Button = ({
  className = "",
  transparent,
  hasPadding,
  withoutBorder,
  withoutHover,
  component = "button",
  isLink,
  children,
  ...rest
}: ButtonProps) => {
  const classes: string = classNames({
    btn: true,
    font: true,
    [className]: className,
    btn__transparent: transparent,
    "btn__has-padding": hasPadding,
    "btn__without-border": withoutBorder,
    "btn__without-hover": withoutHover,
    btn__link: isLink,
  });
  const Component = component;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
