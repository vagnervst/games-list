import React, { useState } from 'react';
import { withRouter } from 'react-router'

import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import AddGame from '../AddGame'
import Game from '../Game'

import reducer from '../../reducer'

import style from './style.css';

const App = ({ match, history }) => {
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const [ games, dispatch ] = reducer()
  const chosenGame = games.find(({ id }) => id === Number(match.params.id))

  const onConfirm = (data) => {
    dispatch({
      type: 'ADD_GAME',
      payload: {
        id: games.length + 1,
        ...data,
      },
    })

    setIsModalVisible(false)
  }

  const onGameChange = game => {
    console.log('selected game', game)
    history.push(`/${game.id}`)
  }

  return (
    <div className={style.app}>
      <AddGame
        onCancel={() => setIsModalVisible(false)}
        onConfirm={onConfirm}
        visible={isModalVisible}
      />
      <Sidebar
        items={games}
        onItemClick={onGameChange}
      >
        <Button onClick={() => setIsModalVisible(!isModalVisible)}>Add Game</Button>
      </Sidebar>
      { chosenGame &&
        <Game
          background={chosenGame.background}
          description={chosenGame.description}
          title={chosenGame.title}
          thumbnail={chosenGame.thumbnail}
        />
      }
    </div>
  )
}

export default withRouter(App)

