"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PlanCard } from "@/components/PlanCard";
import { Plan } from "@/types/Plan";
import { plans } from "@/utils/Plans";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

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

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      localStorage.setItem("plan", JSON.stringify({ card, type, price }));
      router.push("/addon");
   };

   return (
      <div className="text-indigo-900">
         <Header
            title="Select your plan"
            subtitle="You have the option of monthly or yearly billing"
         />
         <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col justify-between mt-10 space-y-16"
         >
            <div>
               {/* SELECT TYPE */}
               <div className="flex justify-center gap-3 mb-5">
                  {["mo", "yr"].map((item) => (
                     <button
                        type="button"
                        onClick={() => handleSelectType(item)}
                        className={`p-1 px-2  rounded-lg outline-none  ${
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
            <Footer title="Next step" goBack />
         </form>
      </div>
   );
};

export default Plan;
