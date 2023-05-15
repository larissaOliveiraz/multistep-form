"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { PageLayout } from "@/components/PageLayout";
import { useRouter } from "next/navigation";

export default function Home() {
   const { push } = useRouter();

   return (
      <PageLayout
         title="Personal Info"
         subtitle="Please provide your name, email address and phone number."
         buttonTitle="Next Step"
         onClick={() => push("/plan")}
      >
         <form className="space-y-14 text-indigo-900">
            <div className="flex flex-col gap-6">
               <label>
                  <span className="text-sm font-semibold">Name</span>
                  <Input type="text" />
               </label>
               <label>
                  <span className="text-sm font-semibold">Email Address</span>
                  <Input type="email" />
               </label>
               <label className="text-sm font-semibold">
                  <span>Phone Number</span>
                  <Input type="tel" />
               </label>
            </div>
         </form>
      </PageLayout>
   );
}
