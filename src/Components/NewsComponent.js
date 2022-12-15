import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


class NewsComponent extends Component {
    static defaultProps = {
        country:'in',
        pageSize:6,
        category:'general'


    }

    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4a7b9bf155b8444dbcc6d5caa1ab54c2&pageSize=${this.props.pageSize}&page=${this.state.page}`
        try {
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();

            let totalPages = Math.ceil(parsedData.totalResults / this.props.pageSize);

            this.setState({ articles: parsedData.articles, totalPages: totalPages,loading:false })

        } catch (e) {
            console.log("Something went Wrong!!")
        }

    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4a7b9bf155b8444dbcc6d5caa1ab54c2&pageSize=${this.props.pageSize}&page=1`
        // try {
        //     this.setState({loading:true})
        //     let data = await fetch(url);
        //     let parsedData = await data.json();

        //     let totalPages = Math.ceil(parsedData.totalResults / this.props.pageSize);

        //     this.setState({ articles: parsedData.articles, totalPages: totalPages,loading:false })

        // } catch (e) {
        //     console.log("Something went Wrong!!")
        // }
        this.updateNews();
    }

    previousPageHandler = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4a7b9bf155b8444dbcc6d5caa1ab54c2&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`
        // this.setState({loading:true})
        // // console.log("Previous");
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading:false
        // })
        this.setState({page:this.state.page-1});
        this.updateNews();
    }

    nextPageHandler = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4a7b9bf155b8444dbcc6d5caa1ab54c2&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`
        // if (this.state.page + 1 <= this.state.totalPages) {
        //     this.setState({loading:true})
        //     // console.log("Next");
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         articles: parsedData.articles,
        //         page: this.state.page + 1,
        //         loading:false
        //     })
        // }
        this.setState({page:this.state.page+1});
        this.updateNews();
    }


    render() {
        return (
            <div className="container my-4 mb-2">
                <h2 className="text-center">NewsForYou - {this.props.category}</h2>
                {this.state.loading && <Spinner/> }
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} date={element.publishedAt} source={element.source.name} author={!element.author?"Unknown":element.author} imageUrl={!element.urlToImage ? "https://images.indianexpress.com/2022/12/Geminid-meteor-shower-20221213-3.jpg" : element.urlToImage} url={element.url} className="card-img-top" />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.previousPageHandler}>&laquo; Previous </button>
                    <button type="button" disabled={this.state.page===this.state.totalPages} className="btn btn-dark" onClick={this.nextPageHandler}>Next &raquo;</button>
                </div>


            </div>
        );
    }
}

export default NewsComponent;