"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PlanCard } from "@/components/PlanCard";
import { Plan } from "@/types/Plan";
import { plans } from "@/utils/Plans";
import { useState } from "react";

type CardType = "Arcade" | "Advanced" | "Pro";

const Plan = () => {
   const [card, setCard] = useState<CardType>("Arcade");
   const [type, setType] = useState<"mo" | "yr">("mo");
   const [price, setPrice] = useState(0);

   const handleSelectPlan = (plan: Plan) => {
      setCard(plan.title);

      if (type === "mo") {
         setPrice(plan.type[0].price);
      } else if (type === "yr") {
         setPrice(plan.type[1].price);
      }
   };

   return (
      <div className="text-indigo-900">
         <Header
            title="Select your plan"
            subtitle="You have the option of monthly or yearly billing"
         />
         <form className="space-y-16 mt-7">
            <div>
               {/* PLAN CARDS */}
               <div className="grid grid-cols-3 gap-3">
                  {plans.map((plan) => (
                     <PlanCard
                        title={plan.title}
                        type={type}
                        price={
                           type === "mo"
                              ? plan.type[0].price
                              : plan.type[1].price
                        }
                        active={card === plan.title}
                        onClick={() => handleSelectPlan(plan)}
                     />
                  ))}
               </div>

               {/* SELECT TYPE */}
               <div className="flex justify-center gap-3 mt-5">
                  <button
                     type="button"
                     onClick={() => setType("mo")}
                     className={`p-1 px-2  rounded-lg outline-none  ${
                        type === "mo"
                           ? "bg-indigo-900 hover:bg-indigo-900 text-gray-100"
                           : "bg-gray-100 text-indigo-900 hover:bg-indigo-100"
                     }`}
                  >
                     Monthly
                  </button>
                  <button
                     type="button"
                     onClick={() => setType("yr")}
                     className={`p-1 px-2  rounded-lg outline-none  ${
                        type === "yr"
                           ? "bg-indigo-900 hover:bg-indigo-900 text-gray-100"
                           : "bg-gray-100 text-indigo-900 hover:bg-indigo-100"
                     }`}
                  >
                     Yearly
                  </button>
               </div>
            </div>
            <Footer title="Next step" goBack />
         </form>
      </div>
   );
};

export default Plan;
