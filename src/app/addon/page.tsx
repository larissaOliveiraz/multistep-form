"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageLayout } from "@/components/PageLayout";
import { AddOn } from "@/types/AddOn";
import { addons } from "@/utils/AddOns";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const AddOn = () => {
   const [checked, setChecked] = useState<AddOn[]>([]);
   const router = useRouter();

   const planStorage =
      typeof window !== "undefined" && localStorage.getItem("plan");
   const planJson = planStorage && JSON.parse(planStorage);

   const planType = planJson.type;

   const handleSelect = (item: AddOn) => {
      if (checked.includes(item)) {
         const newChecked = checked.filter((check) => check !== item);
         setChecked(newChecked);
      } else {
         setChecked((state) => [...state, item]);
      }
   };

   const handleSubmit = () => {
      localStorage.setItem("addons", JSON.stringify(checked));
      router.push("/summary");
   };

   return (
      <PageLayout
         title="Pick add-ons"
         subtitle="Add-ons help enhance your gaming experience"
         buttonTitle="Next Step"
         onClick={handleSubmit}
         disabled
      >
         <form className="space-y-14 text-indigo-900">
            <div className="space-y-4">
               {addons.map((item) => {
                  const active = checked.includes(item);
                  const planPrice =
                     planType === "mo"
                        ? item.type[0].price
                        : item.type[1].price;
                  return (
                     <div
                        onClick={() => handleSelect(item)}
                        className={`flex items-center justify-between gap-4 p-3 border-2 rounded-lg cursor-pointer ${
                           active && "border-indigo-900"
                        }`}
                     >
                        <div>
                           <h3 className="font-bold">{item.title}</h3>
                           <p className="text-sm text-gray-400">
                              {item.subtitle}
                           </p>
                        </div>
                        <span>
                           {planPrice}/{planType}
                        </span>
                     </div>
                  );
               })}
            </div>
         </form>
      </PageLayout>
   );
};

export default AddOn;
