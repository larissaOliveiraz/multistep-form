"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoContext } from "@/context/InfoContext";
import React, { useContext } from "react";
import { addons as addonData } from "../../utils/AddOns";

const Summary = () => {
   const { plan, addons } = useContext(InfoContext);

   const addonList = [];
   let total = 0;

   for (let item of addons) {
      for (let addon of addonData) {
         if (addon.title === item) {
            addonList.push(addon);
            const addonSum =
               plan.type === "mo" ? addon.type[0].price : addon.type[1].price;
            total += addonSum;
         }
      }
   }

   return (
      <div className="text-indigo-900">
         <Header
            title="Finishing up"
            subtitle="Souble-check everything is OK before confirming."
         />

         <section className="w-full p-4 mb-4 bg-gray-100 rounded-lg mt-7">
            <div className="flex items-center justify-between pb-5 mb-5 border-b-2">
               <div className="leading-5">
                  <p className="font-bold">
                     {plan.card} ({plan.type === "mo" ? "Monthly" : "Yearly"})
                  </p>
                  <a className="text-sm text-gray-400 underline">Change</a>
               </div>
               <p className="font-bold">
                  {plan.price}/{plan.type}
               </p>
            </div>
            {addonList.length > 0 ? (
               addonList.map((item) => {
                  const addonPrice =
                     plan.type === "mo"
                        ? item.type[0].price
                        : item.type[1].price;
                  return (
                     <div>
                        <div className="flex items-center justify-between mt-2 text-sm">
                           <p className="font-bold text-gray-500">
                              {item.title}
                           </p>
                           <span className="font-bold text-gray-600">
                              +{addonPrice}/{plan.type}
                           </span>
                        </div>
                     </div>
                  );
               })
            ) : (
               <div>
                  <span>-/-</span>
                  <span>-/-</span>
               </div>
            )}
         </section>
         <div className="flex items-center justify-between px-4 mb-10">
            <p className="text-sm font-bold text-gray-500">
               Total ({plan.type === "mo" ? "per month" : "per year"})
            </p>
            <span className="text-xl font-extrabold text-indigo-900">
               {total + plan.price}/{plan.type}
            </span>
         </div>

         <Footer title="Confirm" goBack />
      </div>
   );
};

export default Summary;
