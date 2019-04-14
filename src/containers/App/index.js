import React from 'react';

import Sidebar from '../../components/Sidebar'

import style from './style.css';

import mockData  from '../../data.json'

const App = () => (
  <div className={style.app}>
    <Sidebar items={mockData} />
  </div>
)

export default App;
