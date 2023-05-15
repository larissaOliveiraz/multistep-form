"use client";
import { Step } from "@/components/Step";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Footer } from "./Footer";

type Props = {
   children: ReactNode;
};

export const Layout = ({ children }: Props) => {
   const pathname = usePathname();
   const { push } = useRouter();

   return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
         <div className="flex w-1/2 overflow-hidden bg-white h-2/3 rounded-xl">
            <section className="p-5 m-3 space-y-2 bg-indigo-600 rounded-xl">
               <Step
                  number={1}
                  step="step 1"
                  title="your info"
                  active={pathname === "/"}
                  onClick={() => push("/")}
               />
               <Step
                  number={2}
                  step="step 2"
                  title="select plan"
                  active={pathname === "/plan"}
                  onClick={() => push("/plan")}
               />
               <Step
                  number={3}
                  step="step 3"
                  title="add-ons"
                  active={pathname === "/addon"}
                  onClick={() => push("/addon")}
               />
               <Step
                  number={4}
                  step="step 4"
                  title="summary"
                  active={pathname === "/summary"}
                  onClick={() => push("/summary")}
               />
            </section>
            <main className="flex-1 p-10 px-20">{children}</main>
         </div>
      </div>
   );
};
