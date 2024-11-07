import React from 'react';

const EventSchemaScript = ({ event }) => {
    const eventName = encodeURIComponent(event?.name)
    const formattedData = {
        "@context": "https://schema.org",
        "@type": "Education Event",
        name: eventName,
        startDate: new Date(),
        endDate: new Date(),
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
            "@type": "Place",
            name: event?.location,

        },
        image: [event?.imageUrl],
        organizer: {
            "@type": "Organization",
            name: "Rajib Das",
            url: "https://rajibdas.info"
        }
    }
    return (
        <>
            <script type='application/ld+json' dangerouslySetInnerHTML={{
                __html: JSON.stringify(formattedData)
            }} />


        </>
    );
};

export default EventSchemaScript;