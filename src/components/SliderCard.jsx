const SliderCard = props => {
    const {item} = props 
    const {source,thumbnail,title,url} = item 

    return (
        <div className="slider-card-container">
            <img src={thumbnail} className="slider-img" alt="thumbnail"/>
            <h1 className="slider-card-title">{title}</h1>
            <p className="slider-card-source">{source}</p>
            <a href={url} target="_blank" rel="noreferrer">
            <button className="slider-card-button">Read More</button>
            </a>
        </div>
    )
}

export default SliderCard