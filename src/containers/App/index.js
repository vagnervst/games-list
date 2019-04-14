import React from 'react';

import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import Game from '../Game'

import mockData  from '../../data.json'

import style from './style.css';

const App = () => (
  <div className={style.app}>
    <Sidebar items={mockData}>
      <Button>Add Game</Button>
    </Sidebar>
    <Game
      background={mockData[0].background}
      description={mockData[0].description}
      title={mockData[0].title}
      thumbnail={mockData[0].thumbnail}
    />
  </div>
)

export default App;
