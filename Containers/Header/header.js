import { faSave } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderWrapper from "../../Wrappers/headerWrapper";
import Container from "../container/container";

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <header className="header">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img
                className="logo"
                src="https://www.algorismic.uz/images/algorismic-02.svg"
                alt="rasm"
              />
            </div>
            <div>
              <ul>
                <li>Book store</li>
                <li>Wishlist</li>
                <li>My collection</li>
              </ul>
            </div>
            <div>
              <FontAwesomeIcon icon={faSave} />
              <button className="btn btn-primary">sign</button>
            </div>
          </div>
        </header>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
