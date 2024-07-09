import "./Button.scss";
import { ButtonHTMLAttributes, ComponentType, ReactHTML } from "react";
import classNames from "classnames";

export type color = "white" | "dark-mode";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: color;
  hasPadding?: boolean;
  withoutBorder?: boolean;
  withoutHover?: boolean;
  component?: ComponentType<any> | keyof ReactHTML;
  isLink?: boolean;
  to?: string;
}

export const Button = ({
  className = "",
  color,
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
    [`btn--color-${color}`]: color,
    "btn--has-padding": hasPadding,
    "btn--without-border": withoutBorder,
    "btn--without-hover": withoutHover,
    "btn--link": isLink,
  });
  const Component = component;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
