import React from 'react';

function PointsList({points, setPoints, onClick}) {
  const [currentEl, setCurrentEl] = React.useState(null)

  function dragStartHandler(e, el) {
    setCurrentEl(el)
  }

  function dragOverHandler(e) {
    e.preventDefault()
    e.target.style.color = '#ccc'
  }

  function dragEndHandler(e) {
    e.target.style.color = 'wheat'
  }

  function dropHandler(e, droppableIEl) {
    e.preventDefault()

    setPoints(points.map(el => {
      if (el.id === droppableIEl.id) {
        return {...el, order: currentEl.order}
      }
      if (el.id === currentEl.id) {
        return {...el, order: droppableIEl.order}
      }
      return el
    }))

    e.target.style.color = 'wheat'
  }

  const sortElements = (a, b) => (a.order > b.order) ? 1 : -1

  return (points &&
    <ul>
      {points.sort(sortElements).map(el => (
        <li
          key={`pl-${el.id}`}
          draggable={true}
          onDragStart={(e) => {
            dragStartHandler(e, el)
          }}
          onDragOver={(e) => {
            dragOverHandler(e)
          }}
          onDragLeave={(e) => {
            dragEndHandler(e)
          }}
          onDragEnd={(e) => {
            dragEndHandler(e)
          }}
          onDrop={(e) => {
            dropHandler(e, el)
          }}
        >
          {el.address}
          <span
            className="material-icons"
            id={el.id}
            onClick={onClick}>cancel</span>
        </li>
      ))}
    </ul>
  )
}

export default PointsList;
