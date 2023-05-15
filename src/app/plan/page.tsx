"use client";
import { PageLayout } from "@/components/PageLayout";
import { PlanCard } from "@/components/PlanCard";
import { Plan } from "@/types/Plan";
import { plans } from "@/utils/Plans";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CardType = "Arcade" | "Advanced" | "Pro" | "";
type PlanType = "mo" | "yr" | "";

const Plan = () => {
   const [card, setCard] = useState<CardType>("");
   const [type, setType] = useState<PlanType>("");
   const [price, setPrice] = useState(9);
   const router = useRouter();

   const handleSelectType = (item: string) => {
      setType(item as PlanType);
      setCard("");
   };

   const handleSelectPlan = (plan: Plan) => {
      setCard(plan.title);

      type === "mo" && setPrice(plan.type[0].price);
      type === "yr" && setPrice(plan.type[1].price);
   };

   const handleSubmit = () => {
      localStorage.setItem("plan", JSON.stringify({ card, type, price }));
      router.push("/addon");
   };

   const buttonDisabled = !!card && !!type;

   return (
      <PageLayout
         title="Select your plan"
         subtitle="You have the option of monthly or yearly billing"
         buttonTitle="Next Step"
         onClick={handleSubmit}
         disabled={!buttonDisabled}
      >
         <form className="flex flex-col text-indigo-900 justify-between space-y-16">
            <div>
               {/* SELECT TYPE */}
               <div className="flex justify-center  gap-3 mb-5">
                  {["mo", "yr"].map((item) => (
                     <button
                        type="button"
                        onClick={() => handleSelectType(item)}
                        className={`p-1 px-2 w-full  rounded-lg outline-none  ${
                           type === item
                              ? "bg-indigo-900 hover:bg-indigo-900 text-gray-100"
                              : "bg-gray-100 text-indigo-900 hover:bg-indigo-100"
                        }`}
                     >
                        {item === "mo" ? "Monthy" : "Yearly"}
                     </button>
                  ))}
               </div>

               {/* PLAN CARDS */}
               <div className="grid grid-cols-3 gap-3">
                  {plans.map((plan) => (
                     <PlanCard
                        key={plan.title}
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
            </div>
         </form>
      </PageLayout>
   );
};

export default Plan;
