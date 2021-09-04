import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    };
    document.title = `Inshorts - ${this.capitalizeFirstLetter(
      this.props.caregory
    )}`;
  }

  async updatePage() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.caregory}&country=${this.props.country}&apiKey=77f0595fd8bd4fc9bc9e3b2c41f88a40&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updatePage();
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.caregory}&country=${this.props.country}&apiKey=77f0595fd8bd4fc9bc9e3b2c41f88a40&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading:false
    });
  }


  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px" }}>
          Top {this.capitalizeFirstLetter(this.props.caregory)} headlines
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
          <div className="row my-3">
            {
              this.state.articles.map((element) => {
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
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
