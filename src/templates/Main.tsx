/* eslint-disable unused-imports/no-unused-vars */
import { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased text-gray-700"></div>
);

export { Main };
