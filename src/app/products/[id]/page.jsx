export function generateStaticParams() {
  return [{ id: '6' }, { id: '3' }, { id: '8' }]
}
import ProductClient from "@/components/ProductClient";



const ProductDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id)

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  console.log(product);
  return  <ProductClient product={product} />;;
};

export default ProductDetails;
