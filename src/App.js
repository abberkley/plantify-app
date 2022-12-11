import React from 'react';

import { Nav, Footer} from './components';
import { Header, Member, Mission, Sale, SeasonalCategories, TileGrid } from './containers';
import './App.css';

const App = () => (
  <div>
    <Nav />
    <Header />
    <SeasonalCategories />
    <TileGrid />
    <Sale />
    <Member />
    <Mission />
    <Footer />
  </div>
);

export default App;
