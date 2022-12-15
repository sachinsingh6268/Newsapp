import { Component } from "react";

class NewsItem extends Component {
    render() {
        let { title, description, imageUrl,url ,date,author,source} = this.props;
        return (
            <div className="card">
                <img src={imageUrl} alt="Unable to load"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} &nbsp;<span className="badge bg-info text-red">{source}</span></p>
                        
                        <p>By {author} on {new Date(date).toUTCString()}</p>
                        <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
            </div>
        );
    }
}

export default NewsItem;