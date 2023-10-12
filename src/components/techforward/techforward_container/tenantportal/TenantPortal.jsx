import React from 'react';
import './TenantPortal.css';
import images from '../../image.js';
import PortalCards from '../portal_cards/PortalCards';
import Header from '../../../../container/header/Header';
const TenantPortal = () => {
    return (
        <div className='ecoworld__tenantportal'>
            <h1>Tenant Portal</h1>
            <div className="tenant_portal">
                <div className="portal_details">
                    <PortalCards image={images.file} content="Invoicing" />
                    <PortalCards image={images.docs} content="Lease documentation" />
                    <PortalCards image={images.book} content="Contact details of property managers" />
                    <PortalCards image={images.horn} content="Campus updates and announcments" />
                </div>
                <div className="portal_info">
                    <Header title="Asset Mangement just got convenient" content="Discover a new level of convenience through the upcoming integrated portal offering-insights, value addition, transparency and efficiency in space management to all tenants alike." />
                </div>
            </div>
        </div>
    )
}

export default TenantPortal