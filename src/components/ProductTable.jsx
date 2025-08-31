import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach(products => {
    if (products.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !products.stocked) {
      return
    }
    if (products.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={products.category}
          key={products.category}
        />
      );
    }

    rows.push(<ProductRow product={products} key={products.name} />);
    lastCategory = products.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
