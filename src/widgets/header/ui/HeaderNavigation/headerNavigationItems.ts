import { getHomeRoute, getProfileRoute } from "@/shared/libs/constants/routes";

export const headerNavigationItems = [
  {
    text: "Home",
    path: getHomeRoute(),
  },
  {
    text: "Profile",
    path: getProfileRoute(),
  },
];
