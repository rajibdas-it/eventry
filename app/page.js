import React, { Suspense } from 'react';
import Header from './Components/landing/Header';
import EventList from './Components/landing/EventList';
import Loading from './Components/Loading';

const HomePage = ({ searchParams: { query } }) => {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query} />
      </Suspense>

    </section>
  );
};

export default HomePage;