import React, { FC } from "react";
import { forwardRef } from "react";
import clsx from "clsx";

const OuterContainer = forwardRef(
  function OuterContainer(props: any, ref: React.ForwardedRef<HTMLInputElement>) {
    const { className, children, ...rest } = props;
    return (
      <div
        ref={ref}
        className={clsx("sm:px-8", className)}
        {...rest}
      >
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

const InnerContainer = forwardRef(
  function InnerContainer(props: any, ref: React.ForwardedRef<HTMLInputElement>) {
    const { className, children, ...rest } = props;
    return (
      <div
        ref={ref}
        className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
        {...rest}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

const Container = forwardRef(function Container(
  props: any,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const {children, ...rest} = props;
  return (
    <OuterContainer ref={ref} {...rest}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

// Container.Outer = OuterContainer;
// Container.Inner = InnerContainer;

export default Container;
