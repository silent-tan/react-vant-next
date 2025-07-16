import type React from "react";

export type WithDisplayNameReactElement = React.ReactElement & {
  type: { displayName: string };
};
