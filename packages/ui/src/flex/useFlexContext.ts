import { use } from "react";
import FlexContext from "./FlexContext";

export function useFlexContext() {
  const flexContext = use(FlexContext);

  if (process.env.NODE_ENV === "development") {
    if (!flexContext) {
      throw new Error("useFlexContext must be used within a FlexContext");
    }
  }

  return flexContext;
}
