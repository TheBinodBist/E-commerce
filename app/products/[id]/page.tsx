"use server"
import { stripe } from "@/lib/stripe"; // Assuming you're importing stripe from your lib
import ProductDetail from "@/components/product-detail";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product))

  return <ProductDetail product={plainProduct} />;
}
