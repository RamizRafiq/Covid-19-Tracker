import React, { ReactNode } from "react";
import CustomHeader from "./header";
import CustomFooter from "./footer";
import './layoutStyles.css'

interface childrenType{
    children:ReactNode
}

export default function BaseLayout({ children }:childrenType) {
  return (
    <div>
      <CustomHeader />
        <div className="main-content">{children}</div>
      <CustomFooter />
    </div>
  );
}
