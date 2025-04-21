import { useState } from 'react'
import { items } from './items'
import ListView from './ListView'

function List() {
  const [item, setItem] = useState(items)

  function filterItems(searchPattern) {
    if (searchPattern === "") {
      setItem(items)
    } else {
      const newItems = filterByParam(searchPattern)
      setItem(newItems)
    }
  }

  function filterByParam(searchPattern) {
    return items.filter(item => item.toLowerCase().includes(searchPattern.toLowerCase()))
  }

  return <ListView elements={item} filterItems={filterItems} />
}

export default List
