import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from "./Spinner.jsx"
import NewsItem from "./NewsItem"
import LoadingBar from "./LoadingBar.jsx"
export default function News(props) {
    var [articals, setarticals] = useState([])
    var [loading, setloading] = useState([true])
    var [page, setpage] = useState([1])
    var [totalResult, settotalResult] = useState([0])
    var [progress, setprogress] = useState([0])
    var fetchMoreData = async () => {
        setloading(true)
        let rawdata = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}& `)
        let data = await rawdata.json()
        setpage(page + 1)
        settotalResult(data.totalResult)
        setarticals(articals.concat(data.articles))
        setloading(false)
    }
        var Update = async () => {
            setloading(true)
            setprogress(50)
            let rawdata = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3a1e654c010a41d4a2209936da0fcbb1`)
             let data = await rawdata.json()
            setprogress(100)
            settotalResult(data.totalResult)
            setarticals(data.articles)
            setloading(false)
        }
            useEffect(() => {
                Update()
            }, [props.category])
             return (
                <>
                    <div className="Container">
                        <h1 className="bg-dark text-light text-center mt-3 mb-3 p-2">My Site | Top News</h1>
                        {loading && <LoadingBar progress={progress} />}
                        {loading && <Spinner />}
                        <InfiniteScroll
                            dataLength={articals.length}
                            next={fetchMoreData}
                            hasMore={articals.length !== totalResult}
                            loader={loading && <Spinner />}
                        >
                            <div className="row">
                                {articals.map((item, index) => {
                                    return (
                                        <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
                                            <NewsItem
                                                title={item.title}
                                                description={item.description}
                                                image={item.urlToImage}
                                                newsUrl={item.url}
                                                author={item.author}
                                                date={item.publishedAt}
                                                source={item.source.name}
                                            />
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </InfiniteScroll>
                    </div>
                </>
            )
        }

