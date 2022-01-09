import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline className='form-inline'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products and more'
        className='mr-sm-5 ml-sm-5 rounded'
      ></Form.Control>
      <Button type='submit' variant='' className='p-1 mx-2 rounded searchbtn'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
