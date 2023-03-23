// import { Loader } from "components/Loader/Loader";
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { StyledHeader, LinkNav } from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/movies">Movies</LinkNav>
        </nav>
      </StyledHeader>
        {/* <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense> */}
    </>
  );
}