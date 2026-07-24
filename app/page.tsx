import {
  HomeCategories,
  HomeCtaBand,
  HomeFeaturedProducts,
  HomeNews,
  HomeServices,
} from "@/frontend/features/home/HomeSections";
import { HomeHero } from "@/frontend/features/home/HomeHero";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeCategories />
      <HomeFeaturedProducts />
      <HomeCtaBand />
      <HomeNews />
    </>
  );
}
