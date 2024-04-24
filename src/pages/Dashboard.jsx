import {Component} from "react"
import Navbar from "../components/Navbar"
import SavedLibraryCard from "../components/SavedLibraryCard"
import ReactSlick  from "../components/ReactSlick";
import ReactChrono from "../components/ReactChrono";



const savedLibraryArray = [
  {
    id:1,
    title:"M, Saved Library 1",
    date:"12-04-2023",
},
{
  id:2,
  title:"My Saved Library 2",
  date:"12-04-2023",
},
{
  id:3,
  title:"My Saved Library 3",
  date:"12-04-2023"
},
{
  id:4,
  title:"My Saved Library 4",
  date:"12-04-2023",
},
{
  id:5,
  title:"My Saved Library 5",
  date:"12-04-2023",
},
]

class Dashboard extends Component{ 

  render(){

  return (
      <div className="home-bg-container"> 
        <Navbar/>
        <div className="saved-cards-container">
          {savedLibraryArray.map(each => 
            <SavedLibraryCard item={each} key={each.id}/>
          )}
        </div>
        <div className="carousel-timeline-container">
          <div>
          <ReactSlick/>
          <button className="view-more-button">View More</button>
          </div>
          <div className="recent-post-container">   
            <div>         
              <h1 className="recent-heading">Recent Releases </h1>
            </div>
            <div>
              <select className="country-select"> 
                <option>India</option>
              </select>
            </div>
            <hr/>
          <ReactChrono/>
          </div>
        </div>
      </div>
      )
  }
    
  };
  
  export default Dashboard;