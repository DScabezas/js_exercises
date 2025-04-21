function ListView({ elements, filterItems }) {
    return (
      <>
        <input type="text" onChange={e => filterItems(e.target.value)} />
        <ul>
          {elements.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </>
    )
  }
  
  export default ListView
  