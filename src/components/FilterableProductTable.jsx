import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ product }) {
  return (
    <div>
      <SearchBar />
      <ProductTable product={product}/>
    </div>
  )
}
