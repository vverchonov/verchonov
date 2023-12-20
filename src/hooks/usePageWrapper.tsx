import * as React from "react";
import Navbar from "../modules/navigation/navbar";
import Footer from "../modules/footer/footer";

type Props = {
  children: React.ReactNode;
};

const Links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "Contact Me",
    url: "/contact",
  },
];

const usePageWrapper = (props: Props): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={Links} />
      <div className="p-5">{props.children}</div>
      <Footer />
    </div>
  );
};

export default usePageWrapper;
