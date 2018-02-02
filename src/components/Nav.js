import React from 'react';
import logo from '../logo.svg';

const Nav = ({navProp}) => {
  return (
    <nav className=" cyan">

      <div className="nav-wrapper container ">
        <a href="" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href=""> Hi {navProp.username } !</a></li>
          <li><a href="">{navProp.email}</a></li>
        </ul>

      </div>
    </nav>
)
}


// class Nav extends Component {
//
//   render() {
//
//     return (
//       <nav>
//
//         <div className="nav-wrapper container">
//           <a href="" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /></a>
//           <ul id="nav-mobile" className="right hide-on-med-and-down">
//             <li><a href=""> Hi { this.props.navProp.username } !</a></li>
//             <li><a href="">{this.props.navProp.email}</a></li>
//           </ul>
//
//         </div>
//       </nav>
//   )
//   }
// }
export default Nav;
