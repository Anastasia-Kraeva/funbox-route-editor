function PointsList({points}) {

  return (points &&
    <ul>
      {points.map(el => (
        <li key={`pl-${el.id}`}>
          {el.name}
          <span className="material-icons" id={el.id}>cancel</span>
        </li>
      ))}
    </ul>
  )
}

export default PointsList;
