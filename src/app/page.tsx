import {
  HomeCategories,
  HomeCtaBand,
  HomeFeaturedProducts,
  HomeNews,
  HomeServices,
} from "@/features/home/HomeSections";
import { HomeHero } from "@/features/home/HomeHero";

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
