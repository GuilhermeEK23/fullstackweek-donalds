import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get_restaurant_by_slug";

import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethosValid = (cunsumptionMethod: string) => {
  return ["TAKEAWAY", "DINE_IN"].includes(cunsumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;

  if (!isConsumptionMethosValid(consumptionMethod)) return notFound();
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) return notFound();

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenuPage;
