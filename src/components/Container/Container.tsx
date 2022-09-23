import React, { FC } from "react";
import { forwardRef } from "react";
import clsx from "clsx";

const OuterContainer = forwardRef(function OuterContainer(
  {
    className,
    children,
    ...props
  }: { className: string; children: React.ReactNode; props: any },
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  {
    className,
    children,
    ...props
  }: { className: string; children: React.ReactNode; props: any },
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      ref={ref}
      className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

const Container = forwardRef(function Container(
  { children, ...props }: { className: string; children: React.ReactNode },
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

export default Container;
