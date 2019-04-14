import React from 'react';

import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import mockData  from '../../data.json'

import style from './style.css';

const App = () => (
  <div className={style.app}>
    <Sidebar items={mockData}>
      <Button>Add Game</Button>
    </Sidebar>
  </div>
)

export default App;
