import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 lg:px-10 xl:px-12">
      {children}
    </div>
  );
}