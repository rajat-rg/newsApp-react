import React, { Component } from 'react'
import newsImg from './newsImg.jpg'
export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            
                <div className="card" style={{minWidth:'18rem'}}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'90%'}}>{source}</span>
                    <img src={imageUrl?imageUrl:newsImg} className="card-img-top" alt="inshorts" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Someone"} at {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read detail</a>
                    </div>
                </div>
            
        )
    }
}

export default NewsItem
