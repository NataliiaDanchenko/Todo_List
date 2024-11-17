import { AppDispatch } from "@/app/config/store/createReduxStore";
import { useDispatch as useReduxDispatch } from "react-redux";

export const useDispatch = () => {
  return useReduxDispatch<AppDispatch>();
};
