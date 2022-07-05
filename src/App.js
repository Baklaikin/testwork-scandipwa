import React, { Component } from "react";
import Header from "./components/header/Header";
import ProductListPage from "./components/product-list/ProductListPage";
import ProductPage from "./components/product-page/ProductPage";
import NotFound from "./components/not-found/NotFound";
import { getInfo } from "./api/api";
import { getAllProductsQuerry } from "./queries/queries";
import { Routes, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: "all",
      product: null,
      inCart: [],
    };
  }

  componentDidMount() {
    //Basicly fetching "all" category of goods to our page
    getInfo(getAllProductsQuerry).then((res) =>
      this.setState({ categories: [...res.categories] })
    );
  }

  componentDidUpdate() {
    //Checking if there is previos product in localStorage and setting it to state, because App provides it to ProductPage
    if (this.state.product === null) {
      const prod = JSON.parse(localStorage.getItem("product"));
      if (prod !== null) {
        this.setState({ product: prod });
      }
    }
  }

  handleClick = (id) => {
    this.setState({ inCart: [...this.state.inCart, id], product: id });
    localStorage.setItem("product", `${JSON.stringify(id)}`);
  };

  handleCategoryChange = (category) =>
    this.setState({ category: `${category}` });

  render() {
    const { category, product } = this.state;
    return (
      <div className="App">
        <Header {...this.state} onChange={this.handleCategoryChange} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProductListPage
                category={category}
                handleClick={this.handleClick}
              />
            }
          ></Route>
          <Route
            path="/all"
            element={
              <ProductListPage
                category={"all"}
                handleClick={this.handleClick}
              />
            }
          ></Route>
          <Route
            exact
            path="/clothes"
            element={
              <ProductListPage
                category={"clothes"}
                handleClick={this.handleClick}
              />
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <ProductListPage
                category={"tech"}
                handleClick={this.handleClick}
              />
            }
          ></Route>
          <Route
            path="/all/:id"
            element={<ProductPage product={product} />}
          ></Route>
          <Route
            exact
            path="/clothes/:id"
            element={<ProductPage product={product} />}
          ></Route>
          <Route
            path="/tech/:id"
            element={<ProductPage product={product} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path={`${category}/*`} element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
