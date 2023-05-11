import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

const Summary = () => {
   return (
      <div className="text-indigo-900">
         <Header
            title="Finishing up"
            subtitle="Souble-check everything is OK before confirming."
         />

         <section className="w-full p-4 bg-gray-100 rounded-lg mt-7 mb-14">
            <div className="flex items-center justify-between pb-5 mb-5 border-b-2">
               <div className="leading-5">
                  <p className="font-bold"></p>
                  <a className="text-sm text-gray-400 underline">Change</a>
               </div>
               <p className="font-bold">0</p>
            </div>
            <div className="flex items-center justify-between mt-2 text-sm">
               <p className="font-bold text-gray-500">Online</p>
               <span className="font-bold">+2/mo</span>
            </div>
         </section>

         <Footer title="Confirm" goBack />
      </div>
   );
};

export default Summary;
