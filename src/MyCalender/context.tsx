import {
  ReactElement,
  createContext,
  useReducer,
} from "react";
import { CalenderTabs } from "./TabsComponent";

type actionType = {
  type: string,
  value: any,
};

const reducer = (action: actionType, state: any) => {
  let { type, value } = action;
  console.log(type, value);
  switch (action) {
    default:
      return state;
  }
  return state;
};

const getInitialState = () => {
  const currentDate = new Date();
  return {
    activeTab: CalenderTabs.month,
    currentDate,
    currentMonth: currentDate.getMonth() + 1,
    currentYear: currentDate.getFullYear(),
  };
};

export const CalenderContext = createContext({});

export const CalenderContextProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [calenderState, dispatch] = useReducer(reducer, getInitialState());
  return (
    <CalenderContext.Provider value={{ calenderState, dispatch }}>
      {children}
    </CalenderContext.Provider>
  );
};
