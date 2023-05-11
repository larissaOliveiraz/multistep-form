"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AddOn } from "@/types/AddOn";
import { addons } from "@/utils/AddOns";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const AddOn = () => {
   const [checked, setChecked] = useState<string[]>([]);
   const router = useRouter();

   const planStorage =
      typeof window !== "undefined" && localStorage.getItem("plan");
   const planJson = planStorage && JSON.parse(planStorage);

   const planType = planJson.type;

   const handleSelect = (item: AddOn) => {
      if (checked.includes(item.title)) {
         const newChecked = checked.filter((check) => check !== item.title);
         setChecked(newChecked);
      } else {
         setChecked((state) => [...state, item.title]);
      }
   };

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      localStorage.setItem("addons", JSON.stringify(checked));
      router.push("/summary");
   };

   return (
      <div className="text-indigo-900">
         <Header
            title="Pick add-ons"
            subtitle="Add-ons help enhance your gaming experience"
         />
         <form onSubmit={(e) => handleSubmit(e)} className="mt-7 space-y-14">
            <div className="space-y-4">
               {addons.map((item) => {
                  const active = checked.includes(item.title);
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
            <Footer title="Next step" goBack />
         </form>
      </div>
   );
};

export default AddOn;
