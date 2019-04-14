import React, { useState } from 'react';

import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import AddGame from '../AddGame'
import Game from '../Game'

import reducer from '../../reducer'

import style from './style.css';

const App = () => {
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const [ games, dispatch ] = reducer()

  const onConfirm = (data) => {
    dispatch({
      type: 'ADD_GAME',
      payload: {
        id: games.length,
        ...data,
      },
    })

    setIsModalVisible(false)
  }

  return (
    <div className={style.app}>
      <AddGame
        onCancel={() => setIsModalVisible(false)}
        onConfirm={onConfirm}
        visible={isModalVisible}
      />
      <Sidebar items={games}>
        <Button onClick={() => setIsModalVisible(!isModalVisible)}>Add Game</Button>
      </Sidebar>
      <Game
        background={games[0].background}
        description={games[0].description}
        title={games[0].title}
        thumbnail={games[0].thumbnail}
      />
    </div>
  )
}

export default App;
