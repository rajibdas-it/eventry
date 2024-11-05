import React from 'react';
import Header from './Components/landing/Header';
import EventList from './Components/landing/EventList';

const HomePage = () => {
  return (
    <section className="container">
      <Header />
      <EventList />
    </section>
  );
};

export default HomePage;