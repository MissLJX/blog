import React from 'react'

export function withList (ItemComponent, items = []) {
  return function () {
    return <ul>{items.map((item, i) => <li><ItemComponent key={item.id || i} item={item}/></li>)}</ul>
  }
}
