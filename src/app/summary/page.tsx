"use client";
import { PageLayout } from "@/components/PageLayout";
import { AddOn } from "@/types/AddOn";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Summary = () => {
   //GET 'ADDONS' FROM LOCALSTORAGE
   const planStorage =
      typeof window !== "undefined" && localStorage.getItem("plan");
   const planJson = planStorage && JSON.parse(planStorage);

   //GET 'ADDONS' FROM LOCALSTORAGE
   const addonStorage =
      typeof window !== "undefined" && localStorage.getItem("addons");
   const addonJson = addonStorage && JSON.parse(addonStorage);

   const [plan, setPlan] = useState(planJson);
   const [addons, setAddons] = useState<AddOn[]>(addonJson);

   let totalAddons = 0;
   for (let i of addons) {
      plan.type === "mo"
         ? (totalAddons += i.type[0].price)
         : (totalAddons += i.type[1].price);
   }

   const router = useRouter();

   return (
      <PageLayout
         title="Finishing up"
         subtitle="Souble-check everything is OK before confirming."
         buttonTitle="Confirm"
         onClick={() => router.push("/finish")}
      >
         <div className="flex flex-col justify-around h-full text-indigo-900">
            <section className="w-full p-4 mb-4 bg-gray-100 rounded-lg mt-7">
               <div className="flex items-center justify-between pb-5 mb-5 border-b-2">
                  <div className="leading-5">
                     <p className="font-bold">
                        {plan.card} ({plan.type === "mo" ? "Monthly" : "Yearly"}
                        )
                     </p>
                     <a
                        className="text-sm text-gray-400 underline cursor-pointer hover:text-indigo-900"
                        href="/plan"
                     >
                        Change
                     </a>
                  </div>
                  <p className="font-bold">
                     {plan.price}/{plan.type}
                  </p>
               </div>
               {addons && addons.length > 0 ? (
                  addons.map((item) => {
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
                     <span>--/-</span>
                     <span>-/--</span>
                  </div>
               )}
            </section>
            <div className="flex items-center justify-between px-4 mb-10">
               <p className="text-sm font-bold text-gray-500">
                  Total ({plan.type === "mo" ? "per month" : "per year"})
               </p>
               <span className="text-xl font-extrabold text-indigo-900">
                  {totalAddons + plan.price}/{plan.type}
               </span>
            </div>
         </div>
      </PageLayout>
   );
};

export default Summary;
