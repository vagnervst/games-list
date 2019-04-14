import React, { useState } from 'react';

import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import AddGame from '../AddGame'
import Game from '../Game'

import mockData  from '../../data.json'

import style from './style.css';

const App = () => {
  const [ isModalVisible, setIsModalVisible ] = useState(false)

  const onConfirm = (data) => {
    console.log(data)
  }

  return (
    <div className={style.app}>
      <AddGame
        onCancel={() => setIsModalVisible(false)}
        onConfirm={onConfirm}
        visible={isModalVisible}
      />
      <Sidebar items={mockData}>
        <Button onClick={() => setIsModalVisible(!isModalVisible)}>Add Game</Button>
      </Sidebar>
      <Game
        background={mockData[0].background}
        description={mockData[0].description}
        title={mockData[0].title}
        thumbnail={mockData[0].thumbnail}
      />
    </div>
  )
}

export default App;
