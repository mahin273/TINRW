export default function SearchBar() {
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text" placeholder="Search..." />
      <label >
        <input type="checkbox" />
        Only Show Product  in Stock
      </label>
    </form>
  )
}
