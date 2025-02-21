import { notFound } from "next/navigation";

import { getProductById } from "@/data/get_product_by_id";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string, productId: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;

  const product = await getProductById(productId);

  if (!product) return notFound();
  return (
    <>
      <ProductHeader product={product} />
      <p>{slug}</p>
      <p>{productId}</p>
    </>
  );
}

export default ProductPage;