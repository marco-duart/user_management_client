import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import * as S from "./styles";

const BaseLayout: React.FC = () => {
  return (
    <S.BaseLayoutContainer>
      <Header />
      <S.MainContent>
        <Outlet />
      </S.MainContent>
    </S.BaseLayoutContainer>
  );
};

export default BaseLayout;
