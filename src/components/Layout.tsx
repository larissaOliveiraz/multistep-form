"use client";
import { Step } from "@/components/Step";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export const Layout = ({ children }: Props) => {
   const pathname = usePathname();

   return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
         <div className="flex max-w-3xl overflow-hidden bg-white rounded-xl">
            <section className="p-8 m-3 space-y-8 bg-indigo-600 rounded-xl">
               <Step
                  number={1}
                  step="step 1"
                  title="your info"
                  active={pathname === "/"}
               />
               <Step
                  number={2}
                  step="step 2"
                  title="select plan"
                  active={pathname === "/plans"}
               />
               <Step
                  number={3}
                  step="step 3"
                  title="add-ons"
                  active={pathname === "/addons"}
               />
               <Step
                  number={4}
                  step="step 4"
                  title="summary"
                  active={pathname === "/summary"}
               />
            </section>
            <main className="flex-1 p-10 px-20">{children}</main>
         </div>
      </div>
   );
};
