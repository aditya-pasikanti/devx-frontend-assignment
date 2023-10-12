import React from 'react'
import Navbar from '../../container/navbar/Navbar'
import './Home.css'
import images from './image.js'
import Overview from '../../container/overview/Overview'
import Header from '../../container/header/Header'
import HomeRouter from './home_container/HomeRouter'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='ecoworld__home'>
      <div className="ecoworld__home_header">
        <Navbar />
        <div className="home_content">
          <div className="home_title">
            <h1>ECOWORLD</h1>
          </div>
          <div className="home_details">
            <p>Ideas don't come out of nowhere, they come from a place.</p>
            <p>A place called inpspiration.</p>
          </div>
        </div>
      </div>
      <div className="home_image">
        <img src={images.home} alt="No Image" />
      </div>
      <div className="home_overview">
        <Overview image={images.home} heading="Creating a world-class workplace experience, that continues to inspire you." about="Asia's first net zero waste office space that minimizes your carbon footprint." />
      </div>
      <div className="home_connectivity">
        <div className="home_connectivity_header">
          <Header title="Experience Ecoworld" content="Where your 9-5 routine brings the synergy of live, work and play. Stop into a workplace where the future takes form amidst vast greenary, collaborative enviroment, entertainmenet avenues and luxurious resedencies." />
        </div>
      </div>

      <div className="home_router_section">
        <Link to='/campus' className='link'>
          <HomeRouter image={images.building} heading="The Campus" content="Lorem ipsum dolor sit amet consectetur." />
        </Link>

        <Link to='/connectivity' className='link'>
          <HomeRouter image={images.connectivity} heading="Connectivity" content="Lorem ipsum dolor sit amet consectetur." />
        </Link>

        <Link to='/techforward' className='link'>
          <HomeRouter image={images.techforward} heading="Techforward" content="Lorem ipsum dolor sit amet consectetur." />
        </Link>

        <Link to='/beyondwork' className='link'>
          <HomeRouter image={images.beyondwork} heading="Beyond Work" />
        </Link>

        <Link to='/inspirationalspaces' className='link'>
          <HomeRouter image={images.inspirationalspaces} heading="Inspirational Spaces" content="Lorem ipsum dolor sit amet consectetur." />
        </Link>

        <Link to='/sustainability' className='link'>
          <HomeRouter image={images.sustainability} heading="Sustainability and Wellness" content="Lorem ipsum dolor sit amet consectetur." />
        </Link>

        <Link to='/testimonals'  className='link'>
          <HomeRouter image={images.testimonals} heading="Testimonals" content="Lorem ipsum dolor sit amet consectetur." />
        </Link>

        <Link to='/brookfield' className='link'>

          <HomeRouter image={images.brookfield} heading="Brook field" content="Lorem ipsum dolor sit amet consectetur." />
        </Link>



      </div>

    </div>
  )
}

export default Home