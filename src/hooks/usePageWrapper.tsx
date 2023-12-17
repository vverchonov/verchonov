import * as React from "react";
import Navbar from "../modules/navigation/navbar";
import Footer from "../modules/footer/footer";

type Props = {
  children: React.ReactNode;
};

const usePageWrapper = (props: Props): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default usePageWrapper;
