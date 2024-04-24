import { Component } from 'react'
import Slider from 'react-slick'
import axios from 'axios';
import SliderCard from './SliderCard';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class ReactSlick extends Component {
  state ={articlesList:[],errorMsg:""}
  
  componentDidMount() {
    this.getArticles()
  }

  getArticles = async () => {      
    const options = {
      method: 'GET',
      url: 'https://climate-news-feed.p.rapidapi.com/',
      params: {
        source: 'Nasa Climate',
        limit: '50',
        exclude: 'The Guardian'
      },
      headers: {
        'X-RapidAPI-Key': '913ee08a04mshafce613d81dae29p17aeb5jsna4fd992ed8df',
        'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      this.setState({articlesList:response.data.articles})
    } catch (error) {
      console.error(error);
      this.setState({errorMsg:error})
    }
  }

  render() {
    const {errorMsg} = this.state  
    const {articlesList} = this.state

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {articlesList.map(each => 
            <SliderCard item={each} key={each.title}/>
          )}
        </Slider>
        {errorMsg !== undefined && <p>{errorMsg}</p>}
      </div>
    )
  }  
}

export default ReactSlick