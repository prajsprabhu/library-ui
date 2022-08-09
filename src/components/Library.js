import React, { useEffect, useState } from 'react'

export default function Library() {
  const [libraries, setLibrary] = useState([])

  const getLibrary = async () => {
    const response = await fetch('http://localhost:4009/library', {
      headers: {
        key: '361efe3a1a534dcab7601447213005',
      },
    })

    const data = await response.json()
    console.log(data)
    setLibrary(data)
  }

  useEffect(() => {
    getLibrary()
  }, [])

  return (
    <div>
      <label for='libraries'>Select your Library:</label>

      <select name='libraries' id='libraries'>
        {libraries.map((library) => {
          return (
            <option key={library._id} value={library.name}>
              {library.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
//http://localhost:4009/library
//use this in component did moount and list the name//
//.map//
