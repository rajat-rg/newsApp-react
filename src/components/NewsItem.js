import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbreaking-news&psig=AOvVaw05XjSTRuCiB08-aQNOMSAX&ust=1630238121640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDskrTU0_ICFQAAAAAdAAAAABAD"} className="card-img-top" alt="inshorts" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read detail</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
