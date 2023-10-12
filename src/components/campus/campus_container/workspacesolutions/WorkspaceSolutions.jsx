import React, { useState } from 'react';
import images from './image.js';
import './WorkspaceSolutions.css'
import Header from '../../../../container/header/Header.jsx';
import Carousel from '../../../../container/carousel/Carousel.jsx';

const galleryImages = [images.carausel1, images.carausel2, images.carausel3, images.carausel4, images.carausel5]

const WorkspaceSolutions = () => {
    

    return (
        <div className="workspace">
            <div className="workspace_header">
                <Header title="Workspace Solutions" content="Embrace a new era of work with spaces designed just for you that promote innovation and teamwork." />

            </div>

            <div className="workspace_carousel_card">
                <div className="workspace_carousel">
                    <Carousel images={galleryImages} />
                    <div className="workspace_carousel_card_content">
                        <h3>Fitted out Spaces</h3>
                        <p>
                            Lease out a space with ready-to-use kitchen, bathrooms, meeting
                            rooms, workstations, and breakout areas.
                        </p>
                    </div>
                </div>

                <div className="arrows">
                    <button >&lt;</button>
                    <button >&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default WorkspaceSolutions;
