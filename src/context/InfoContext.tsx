"use client";
import { ReactNode, createContext, useState } from "react";

type Props = {
   children: ReactNode;
};

type PlanContext = {
   card: string;
   type: string;
   price: number;
};

type InfoContextType = {
   plan: PlanContext;
   addons: string[];
};

export const InfoContext = createContext<InfoContextType>(
   {} as InfoContextType
);

export const InfoContextProvider = ({ children }: Props) => {
   //GET 'PLAN' FROM LOCALSTORAGE
   const planStorage =
      typeof window !== "undefined" && localStorage.getItem("plan");
   const planJson = planStorage && JSON.parse(planStorage);

   //GET 'ADDONS' FROM LOCALSTORAGE
   const addonStorage =
      typeof window !== "undefined" && localStorage.getItem("addons");
   const addonJson = addonStorage && JSON.parse(addonStorage);

   const [plan, setPlan] = useState(planJson);
   const [addons, setAddons] = useState(addonJson);

   return (
      <InfoContext.Provider value={{ plan, addons }}>
         {children}
      </InfoContext.Provider>
   );
};
