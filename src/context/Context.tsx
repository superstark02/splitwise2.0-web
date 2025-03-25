import { createContext } from "react";
import { Friend } from "../interface/Friends";

export const AppContex = createContext({
  setChecked: (a) => {},
  checked: new Array<String>(),
  setConnections: (a) => {},
  connections: new Array<Friend>(),
  user: {},
  setUser: (a) => {},
});
