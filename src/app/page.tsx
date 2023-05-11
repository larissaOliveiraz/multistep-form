import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";

export default function Home() {
   return (
      <div className="text-indigo-900">
         <Header
            title="Personal Info"
            subtitle="Please provide your name, email address and phone number."
         />
         <form className="space-y-14" action={"/plan"}>
            <div className="flex flex-col gap-6 mt-6">
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
            <Footer title="Next step" />
         </form>
      </div>
   );
}
