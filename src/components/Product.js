import React from 'react';
// import Subscribe from './Subscribe'

const Product = ( {productObj, addSubscriber, deleteProduct, changeColor, changeTone} ) => {
  return (
    <div className="product">

      <div className={"card horizontal " + productObj.color + productObj.colorTone}>
        <div className="card-image">

        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h5> { productObj.title } </h5>
            <h6>{ productObj.subtitle }</h6>

          </div>
          <div>
            <div className="row subscribeBar">
              <div>
                <h6 className="col s12 m6"> {productObj.subscribers} subscribers</h6>
              </div>
              <div className="col s12 m6 subscribeBtn">
                <a className="waves-effect waves-light btn  pink lighten-3" onClick={(e) => addSubscriber(productObj.id)}>Subscribe</a>
              </div>
            </div>
            {/* <Subscribe subscribers={ this.props.productObj.subscribers } /> */}
          </div>
          <div >
            {/* <a className="waves-effect waves-light btn" onClick={(e) => this.hidden(e)}>Hide</a>

            <a className="waves-effect waves-light btn" onClick={(e) => this.changeTone(e)}>Change Tone</a>
            <a className="waves-effect waves-light btn" onClick={(e) => this.changeColor(e)}>Change Color</a> */}
            <a className="waves-effect waves-light btn" onClick={(e) => changeTone(productObj.id)}>Change Tone</a>
            <a className="waves-effect waves-light btn" onClick={(e) => changeColor(productObj.id)}>Change Color</a>
            <a className="waves-effect waves-light btn  pink lighten-3" onClick={(e) => deleteProduct(this.props.productObj.id)}>Delete</a>
          </div>
        </div>
      </div>

    </div>

  )




}
//
// class Product extends Component {
//   constructor(props){
//     super()
//     this.state = {
//       color: "blue-grey",
//       colorIndex: 0,
//       hide: "",
//       colorTone: " lighten-5",
//       colorState: 0,
//       // alreadySubscribe: false,
//       // subscribers: props.productObj.subscribers
//     }
//   }
//
//   // increaseSubscriber(e) {
//   //   if (!this.state.alreadySubscribe ){
//   //     this.setState({
//   //       subscribers: this.state.subscribers + 1,
//   //       alreadySubscribe: true
//   //     });
//   //
//   //   }
//   // }
//
//   hidden(e) {
//     this.setState({
//       hide: " hide"
//     });
//   }
//   changeColor(e){
//     const colorArray = ["blue-grey", "deep-orange", "orange", "amber", "yellow", "lime", "light-green", "green", "teal", "cyan", "blue", "light-blue", "indigo",  "deep-purple", "purple", "pink", "red"]
//     if (this.state.color === "red"){
//       this.setState({
//         color: "blue-grey",
//         colorIndex: 0
//       })
//     }
//     else {
//       this.setState({
//         color: colorArray[this.state.colorIndex + 1],
//         colorIndex: this.state.colorIndex + 1
//       })
//     }
//   }
//   changeTone(e) {
//     const colorToneArray = [" lighten-5", " lighten-4", " lighten-3", " lighten-2", " lighten-1", "", " darken-1", " darken-2", " darken-3", " darken-4"]
//     if (this.state.colorState === 9 ){
//       this.setState({
//         colorTone: " lighten-5",
//         colorState: 0
//       })
//     }
//     else {
//       this.setState({
//         colorTone: colorToneArray[this.state.colorState + 1],
//         colorState: this.state.colorState + 1
//       })
//     }
//   }
//
//   render() {
//
//     return (
//       <div className="product">
//
//         <div className={"card horizontal " + this.state.color+ this.state.colorTone + this.state.hide}>
//           <div className="card-image">
//
//           </div>
//           <div className="card-stacked">
//             <div className="card-content">
//               <h5> { this.props.productObj.title } </h5>
//               <h6>{ this.props.productObj.subtitle }</h6>
//
//             </div>
//             <div>
//               <div className="row subscribeBar">
//                 <div>
//                   <h6 className="col s12 m6"> {this.props.productObj.subscribers} subscribers</h6>
//                 </div>
//                 <div className="col s12 m6 subscribeBtn">
//                   <a className="waves-effect waves-light btn" onClick={(e) => this.props.addSubscriber(this.props.productObj.id)}>Subscribe</a>
//                 </div>
//               </div>
//               {/* <Subscribe subscribers={ this.props.productObj.subscribers } /> */}
//             </div>
//             <div >
//               <a className="waves-effect waves-light btn" onClick={(e) => this.hidden(e)}>Hide</a>
//
//               <a className="waves-effect waves-light btn" onClick={(e) => this.changeTone(e)}>Change Tone</a>
//               <a className="waves-effect waves-light btn" onClick={(e) => this.changeColor(e)}>Change Color</a>
//               <a className="waves-effect waves-light btn" onClick={(e) => this.props.deleteProduct(this.props.productObj.id)}>Delete</a>
//             </div>
//           </div>
//         </div>
//
//       </div>
//
//   )
//
//   }
// }
export default Product;
