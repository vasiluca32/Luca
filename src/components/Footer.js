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
          <h1>About</h1>
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

// const Footer = () => {
//     return (
//       <div className="main-footer">
//         <div className="container">
//           <div className="row">
//             {/* Colum1 */}
//             <div className="col-sm">
//               <h1>Movie website</h1>
//             </div>
//             {/* Colum2 */}
//             <div className="col-sm">
//               <h1>Movie website</h1>
//               <ul className="list-unstyled">
//                 <a href="#!" className="fb-ic mr-3">
//                   <MDBIcon fab icon="facebook-f" />
//                 </a>
//                 <li>b</li>
//                 <li>c</li>
//               </ul>
//             </div>
//             {/* Colum3 */}
//             <div className="col-sm">
//               <h1>Movie website</h1>
//               <ul className="list-unstyled">
//                 <li>d</li>
//                 <li>e</li>
//                 <li>f</li>
//               </ul>
//             </div>
//           </div>
//           <hr />
//           <div className="row">
//             <p className="col-sm">
//               &copy;{new Date().getFullYear} Movie Website | All Right Reserved To
//               Saturn Team |Privacy Policy
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default Footer;
