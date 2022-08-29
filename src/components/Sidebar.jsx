import React from 'react'
import {  Stack } from '@mui/material'
import { categories } from '../utils/constants'



const Sidebar = ({selectedCategory,setSelectedCategory,name,setName}) => {
  return (
      <Stack direction="row" sx={{
          overflowY: 'auto',
          height: { sx: 'auto', md: '95%' },
          flexDirection:{md: 'column'}
      }}>
          {categories.map((category,i) => (
              <button className='category-btn'
                  onClick={() => {
                      setSelectedCategory(category.actual)
                      setName(category.name)
                  }}
                  style={{ background: category.actual === selectedCategory && '#fc1503', color: 'white' }}
                  key={i}
              >
                  <span style={{
                      color: category.actual === selectedCategory ? 'white' : 'red',
                      marginRight:'15px'
                  }}>{category.icon}</span>
                  <span style={{
                      opacity:category.actual===selectedCategory ? '1':'0.8'
                  }}>{category.name}</span>
              </button>
          ))}
    </Stack>
  )
}

export default Sidebar