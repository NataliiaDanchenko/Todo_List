// react
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
// layouts
import { HeaderLayout } from "../../layout/header/HeaderLayout";
// route guards
import { AuthRequiredGuard } from "./routeGuards/AuthRequiredGuard";
// pages
import { HomePage } from "@/pages/home";
import { ProfilePage } from "@/pages/profile";
import { NotFoundPage } from "@/pages/notFound";
import { UserPage } from "@/pages/user";
// constants
import {
  getHomeRoute,
  getNotFoundRoute,
  getProfileRoute,
  getUserRoute,
} from "@/shared/libs/constants/routes";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = ({}) => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path={getHomeRoute()} element={<HomePage />} />
        <Route path={getNotFoundRoute()} element={<NotFoundPage />} />
        <Route path={getUserRoute(":id")} element={<UserPage />} />
        <Route element={<AuthRequiredGuard />}>
          <Route path={getProfileRoute()} element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
};
