function PointsList({points, onClick}) {

  return (points &&
    <ul>
      {points.map(el => (
        <li key={`pl-${el.id}`}>
          {el.name}
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
