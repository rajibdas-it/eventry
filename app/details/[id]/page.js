import EventDetails from '@/app/Components/details/EventDetails';
import EventVenue from '@/app/Components/details/EventVenue';
import HeroSection from '@/app/Components/details/HeroSection';
import { getEventDetails } from '@/db/quries';
import React from 'react';

const EventDetailPage = async ({ params }) => {
    const { id } = await params
    const event = await getEventDetails(id)
    console.log(event);
    return (
        <>
            <HeroSection event={event} />
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails event={event} />
                    <EventVenue />
                </div>
            </section>
        </>
    );
};

export default EventDetailPage;