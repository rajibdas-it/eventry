import React from 'react';
import Header from './Components/landing/Header';
import EventList from './Components/landing/EventList';

const HomePage = ({ searchParams: { query } }) => {
  return (
    <section className="container">
      <Header />
      <EventList query={query} />
    </section>
  );
};

export default HomePage;