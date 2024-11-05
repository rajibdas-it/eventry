import EventDetails from '@/app/Components/details/EventDetails';
import EventVenue from '@/app/Components/details/EventVenue';
import HeroSection from '@/app/Components/details/HeroSection';
import React from 'react';

const EventDetailPage = ({ params }) => {
    return (
        <>

            <HeroSection />
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails />
                    <EventVenue />
                </div>
            </section>
        </>
    );
};

export default EventDetailPage;