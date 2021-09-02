import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `Inshorts - ${this.capitalizeFirstLetter(this.props.caregory)}`
  }

  async updatePage()
  {
    this.setState({loading:true})
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.caregory}&country=${this.props.country}&apiKey=77f0595fd8bd4fc9bc9e3b2c41f88a40&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false,
    });


  }
  async componentDidMount() {
    this.updatePage();
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updatePage();
  };

  handleNextClick = async () => {
      this.setState({
        page: this.state.page + 1,
      });
      this.updatePage();
    
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'30px'}}>Top {this.capitalizeFirstLetter(this.props.caregory)} headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col mb-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
                
              </div>

              
            );
          })}
        </div>
        {!this.state.loading &&  <div className="d-flex justify-content-between container my-3">
          <button
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &#8592; Prev
          </button>
          <button
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &#8594;
          </button>
        </div>}
      </div>
    );
  }
}
