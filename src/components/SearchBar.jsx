export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <input type="text" value={filterText} placeholder="Search..."
      onChange={(e)=>onFilterTextChange(e.target.value)}
      />
      <label>
        <input type="checkbox" checked={inStockOnly}
        onChange={(e)=>onInStockOnlyChange(e.target.checked)}
        /> Only Show Product in
        Stock
      </label>
    </form>
  );
}
