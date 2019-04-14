import React, { useState } from 'react'

import TextInput from '../../components/TextInput'
import Modal from '../../components/Modal'
import Button from '../../components/Button'

import style from './style.css'

const AddGame = ({
  onCancel,
  onConfirm,
  visible,
}) => {
  const [ state, setState ] = useState({})

  const onChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  const preventDefault = fn => e => {
    e.preventDefault()
    fn(state)
  }

  return (
    <Modal visible={visible}>
      <div className={style.addgame}>
        <h1 className={style.title}>Add New Game</h1>
        <form
          className={style.form}
          onSubmit={preventDefault(onConfirm)}
        >
          <TextInput
            label="Thumbnail"
            name="thumbnail"
            onChange={onChange}
            placeholder="enter URL..."
          />
          <TextInput
            label="Title"
            name="title"
            onChange={onChange}
            placeholder="enter title..."
          />
          <TextInput
            label="Description"
            name="description"
            onChange={onChange}
            placeholder="enter description..."
          />
          <TextInput
            label="Background"
            name="background"
            onChange={onChange}
            placeholder="enter URL..."
          />
          <div className={style.actions}>
            <Button onClick={preventDefault(onCancel)}>Cancel</Button>
            <Button>Confirm</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default AddGame

