import React, { Component } from 'react';

import uuidv4 from 'uuid/v4'

import Nav from './Nav'
import Product from './Product'
import Feeds from './Feeds'
import Rightbar from './Rightbar'

const productsOriginal = [
  {
    id: 1,
    title:'LivnList Messenger',
    subtitle:'Photo-based messaging app for making plans with video invites',
    subscribers: 56,
    categories: "photo",
    color: "blue-grey",
    colorState: 0,
    colorTone: " lighten-5",
    colorIndex: 0
  },
  {id: 2,
    title:'Lucid',
    subtitle: 'Create beautiful clear design system',
    subscribers: 97,
    categories: "design",
    color: "blue-grey",
    colorState: 0,
    colorTone: " lighten-5",
    colorIndex: 0
  },
  { id: 3,
    title: 'Plutio',
    subtitle: 'An online community to discuss topics that matter',
    subscribers: 21,
    categories: "community",
    color: "blue-grey",
    colorTone: " lighten-5",
    colorState: 0,
    colorIndex: 0
  }
]

class App extends Component {
  constructor (){
    super()
    this.state = {
      keyword: "",
      products: productsOriginal,
      displayProductArray: productsOriginal,
      // newProduct: {},
      newTitle: "",
      newSubtitle: "",
      newCategory: ""
    }
  }
  handleKeyUp(e){
    this.setState ({
      keyword:  e.target.value
    })
  }
  newTitle (e){
    this.setState ({
    newTitle:  e.target.value
  })}
  newSubtitle (e){
    this.setState ({
    newSubtitle:  e.target.value
  })}
  newCategory (e){
    this.setState ({
    newCategory:  e.target.value
  })}

  handleSelect (e) {
    const category = e.target.value
    let filteredProducts = this.state.products.filter(product => {
      return product.categories === category
    })
    this.setState({
      displayProductArray: filteredProducts
    })
  }
  addProduct (e){
    e.preventDefault()
    let newProduct = {
      id: uuidv4(),
      title: this.state.newTitle,
      subtitle: this.state.newSubtitle,
      subscribers: 0,
      categories: this.state.newCategory,
      color: "blue-grey",
      colorState: 0,
      colorIndex: 0
    }


    this.setState ({
      products: [ newProduct, ...this.state.products],
      newTitle: "",
      newSubtitle: "",
      newCategory: "",
      // displayProductArray: [ newProduct, ...this.state.products]
    })
    // var input = document.getElementsByTagName('Input')
    // let input.val() =""
  }
  deleteProduct = (id) => {
    const productId = id
    let productsArray = [...this.state.products]
    let toDeleteIndex = 0
    productsArray.forEach((product,index) => {
      if (product.id === productId) {
        toDeleteIndex = index
      }
    })
    productsArray.splice(toDeleteIndex, 1)
    this.setState ({
      products: productsArray,
      displayProductArray: productsArray
    })
  }
  increaseSubscriber = (productId) => {
    let toUpdateObj = this.state.products.find(product => {
        return product.id === productId
    })
    toUpdateObj.subscribers += 1
    this.state.products.sort(function(a, b) {
      return b.subscribers - a.subscribers
    })
    this.setState ({
      products: this.state.products,
      displayProductArray: this.state.products
    })
  }

  changeColor = (productId) => {
    let toUpdateObj = this.state.products.find(product => {
        return product.id === productId
    })

    const colorArray = ["blue-grey", "deep-orange", "orange", "amber", "yellow", "lime", "light-green", "green", "teal", "cyan", "blue", "light-blue", "indigo",  "deep-purple", "purple", "pink", "red"]
    if (toUpdateObj.color === "red"){
      toUpdateObj.color = "blue-grey"
      toUpdateObj.colorIndex = 0
    }
    else {
      toUpdateObj.color = colorArray[toUpdateObj.colorIndex + 1]
        color: colorArray[this.state.colorIndex + 1],
        toUpdateObj.colorIndex += 1
    }


    this.setState ({
      products: this.state.products,
      displayProductArray: this.state.products
    })
  }

  changeTone = (productId) => {
    let toUpdateObj = this.state.products.find(product => {
        return product.id === productId
    })

    const colorToneArray = [" lighten-5", " lighten-4", " lighten-3", " lighten-2", " lighten-1", "", " darken-1", " darken-2", " darken-3", " darken-4"]
    if (toUpdateObj.colorState === 9 ){
      toUpdateObj.colorTone = " lighten-5"
      toUpdateObj.colorState = 0
    }
    else {
      toUpdateObj.colorTone = colorToneArray[toUpdateObj.colorState + 1]
      toUpdateObj.colorState += 1

    }
    this.setState ({
      products: this.state.products,
      displayProductArray: this.state.products
    })
  }
  changeTone(e) {
    const colorToneArray = [" lighten-5", " lighten-4", " lighten-3", " lighten-2", " lighten-1", "", " darken-1", " darken-2", " darken-3", " darken-4"]
    if (this.state.colorState === 9 ){
      this.setState({
        colorTone: " lighten-5",
        colorState: 0
      })
    }
    else {
      this.setState({
        colorTone: colorToneArray[this.state.colorState + 1],
        colorState: this.state.colorState + 1
      })
    }
  }


  render() {
    const navProp = {
      username: "Si Ya",
      title: 'Proddiesz',
      email: 'ngsiya90@gmail.com'
    }

    const feeds = [
      {
        title: 'Tech'
      },
      {
        title: 'Games'
      },
      {
        title: 'Books'
      },
      {
        title: 'Mac'
      },
      {
        title: 'Writing tools'
      }
    ]

  const productComponents =
  this.state.displayProductArray.map((product,index) => {
    return <Product
      key={ product.id }
      productObj={ product }
      deleteProduct={ this.deleteProduct }
      addSubscriber={ this.increaseSubscriber}
      changeColor={ this.changeColor}
      changeTone={ this.changeTone }
    />
  })
  const feedsComponents = feeds.map(( feed, index) => {
    return <Feeds
      key={index}
      feedsObj = { feed }
    />
  })


  return (
    <div>
      <Nav navProp={navProp}/>
      <div className="row container">
        <div>
          <h3>Searching:</h3>
          <h4>{ this.state.keyword }</h4>
          <input type="text" onKeyUp={(e) => this.handleKeyUp(e)}></input>
        </div>
        <div className="grey lighten-2">
          <form>
            <input className="titleinput" type="text" placeholder="  Title" onChange={(e) => this.newTitle(e)}
            value={ this.state.newItem }></input>
            <input type="text" placeholder="  Subtitle" onKeyUp={(e) => this.newSubtitle(e)}
            value={ this.state.newItem }></input>
            <select onChange={(e) => this.newCategory(e)}>
              <option value="photo" >photo</option>
              <option value="community">community</option>
              <option value="design">design</option>
            </select>
            <button className="waves-effect waves-light btn cyan" onClick={(e) => this.addProduct(e)}>Add</button>

          </form>
        </div>
        <div>
          <h5>Filter</h5>
          <select onChange={(e) => this.handleSelect(e)}>
            <option value="photo" >photo</option>
            <option value="community">community</option>
            <option value="design">design</option>
          </select>
        </div>
        <div className="col s12 m4 l2">
          <h5>Feeds</h5>
          <div className="">
            { feedsComponents }
          </div>

        </div>
        <div className="col s12 m4 l7 products">
          <h4> Upcoming Products</h4>
          { productComponents }
        </div>
        <div className="col s12 m4 l3">
          <div className="rightbar">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  )}}

export default App;
