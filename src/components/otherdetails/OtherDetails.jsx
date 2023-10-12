import React from 'react'
import './OtherDetails.css';
import Section from '../../container/section/Section';
import EventSponsors from './otherdetails_container/eventsponsors/EventSponsors';
import EventPictures from './otherdetails_container/event_pictures/EventPictures';
import Video from '../campus/campus_container/campus_video/Video';
import images from './image';

const OtherDetails = () => {
  return (
    <div className='ecoworld__otherdetails'>
        <Section heading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, obcaecati." />
        <div className="otherdetails_info">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, provident harum modi molestias non enim officia aliquid neque vero, omnis, necessitatibus laborum placeat nisi a ad distinctio nesciunt voluptate perferendis?</p>
            <p>18 August 2023 - 20 August 2023</p>
            <p>Special Guest: Mr. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <EventSponsors />
        <EventPictures />
        <div className="event_experience">
            <h1>Event Experience Testimonals</h1>
            <div className="event_experience_about">
                <Video />
                <div className="event_experience_about_details">
                    <img src={images.quote} alt="No Image" />
                    <p className="event_experience_content">
                        "Ecoworld is where the future is! And we can say this after having being here for the past 5 years."
                    </p>
                    <div>
                        <p> - Vishaka Nilakhe</p>
                        <p>CEO, Kalyan Infra</p>
                    </div>
                </div>
            </div>
            <div className="arrows">
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </div>
    </div>
  )
}

export default OtherDetails