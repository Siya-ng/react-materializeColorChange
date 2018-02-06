import React from 'react';
import logo from '../logo.svg';

const Rightbar = (props) => {
  return (
    <div>
      <div className="card">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="card-content">
          <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <a href="">This is a link</a>
            <a href="">This is a link</a>
          </div>
        </div>
      </div>
    )
  }

// class Rightbar extends Component {
//
//   render() {
//
//     return (
//       <div>
//         <div className="card">
//           <img src={logo} className="App-logo" alt="logo" />
//           <div className="card-content">
//             <span className="card-title">Card Title</span>
//             <p>I am a very simple card. I am good at containing small bits of information.
//               I am convenient because I require little markup to use effectively.</p>
//           </div>
//           <div className="card-action">
//               <a href="">This is a link</a>
//               <a href="">This is a link</a>
//           </div>
//         </div>
//       </div>
//
//   )
//
//   }
// }
export default Rightbar;
