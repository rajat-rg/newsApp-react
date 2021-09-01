import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    

    constructor()
        {
            super();
            this.state={
                articles : [],
                loading:false,
                page:1,
                pageSize:12,

            }
        }
        async componentDidMount(){
            let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=77f0595fd8bd4fc9bc9e3b2c41f88a40&page=${this.state.page}&pageSize=${this.state.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()  
            console.log(parsedData)
            this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})

        }
        
        handlePrevClick = async ()=>
        {
            let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=77f0595fd8bd4fc9bc9e3b2c41f88a40&page=${this.state.page-1}&pageSize=${this.state.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()  
            console.log(parsedData)
            this.setState({
                page:this.state.page-1,
                articles: parsedData.articles,
                })
                
                console.log(this.state.page)
            }

        handleNextClick = async ()=> 
        {
            if( this.state.page+1 < Math.ceil(this.state.totalResults/this.state.pageSize))
            {
                console.log("Next")
                console.log(!this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize))
                let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=77f0595fd8bd4fc9bc9e3b2c41f88a40&page=${this.state.page+1}&pageSize=${this.state.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()  
            console.log(parsedData)
            this.setState({
                page:this.state.page+1,
                articles: parsedData.articles,
                })
                
                
            }
        }
        render() {

        return (
            <div className="container my-3">
                <h2>Top headlines</h2>
                <div className="row my-3">
                {this.state.articles.map((element)=>
                    {return <div className="col mb-4" key = {element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                            </div>
                })}
                </div>
                <div className="d-flex justify-content-between container my-3">
                    <button className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handlePrevClick}>&#8592; Prev</button>
                    <button className="btn btn-dark" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)} onClick={this.handleNextClick}>Next &#8594;</button>
                </div>
            </div>
        )
    }
}
