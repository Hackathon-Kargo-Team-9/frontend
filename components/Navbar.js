import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Content from "./Content";

const NavbarContainer = styled.nav`
  height: 80px;
  background-color: var(--softgrey);
`;

const NavContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const Logout = styled.div`
  cursor: pointer;
`;

function Navbar() {
  function onClickLogout() {
    location.href = "/";
  }

  return (
    <NavbarContainer>
      <NavContent>
        <div>TMS</div>
        <Links>
          <Link href="/transporter/trucks">Trucks</Link>
          <Link href="/transporter/drivers">Drivers</Link>
        </Links>
        <Logout onClick={onClickLogout}>Logout</Logout>
      </NavContent>
    </NavbarContainer>
  );
}

export default Navbar;
