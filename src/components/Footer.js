import React from "react";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <MDBContainer>
            <MDBBtn size="lg" tag="a" floating social="fb">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn size="lg" tag="a" floating social="tw">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn size="lg" tag="a" floating social="ins">
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
            <MDBBtn size="lg" tag="a" floating social="pin">
              <MDBIcon fab icon="pinterest" />
            </MDBBtn>
            <MDBBtn size="lg" tag="a" floating social="yt">
              <MDBIcon fab icon="youtube" />
            </MDBBtn>
          </MDBContainer>
        </div>
        <div className="row">
          <h4>About</h4>
        </div>
        <div className="row">
          <h4>Help</h4>
        </div>

        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear} Movie Website | All Right Reserved
            To Saturn Team |Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
