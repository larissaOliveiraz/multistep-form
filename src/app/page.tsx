"use client";
import { Input } from "@/components/Input";
import { PageLayout } from "@/components/PageLayout";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";

const validateInputs = (value: string) => {
   if (!value) {
      return "Required";
   }
   if (value.length < 4) {
      return "Type a valid credential";
   }
   return undefined;
};

const validateEmail = (value: string) => {
   validateInputs(value);

   const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

   if (!emailRegex.test(value)) {
      return "Type a valid email";
   }

   return undefined;
};

const validatePhoneNumber = (value: string) => {
   validateInputs(value);

   const phoneRegex =
      /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

   if (!phoneRegex.test(value)) {
      return "Type a valid phone number";
   }
   return undefined;
};

export default function Home() {
   const nameProps = useInput({ validate: validateInputs });
   const emailProps = useInput({ validate: validateEmail });
   const phoneProps = useInput({ validate: validatePhoneNumber });

   const router = useRouter();

   const buttonDisabled =
      !!nameProps.value &&
      !!emailProps.value &&
      !!phoneProps.value &&
      !nameProps.error &&
      !emailProps.error &&
      !phoneProps.error;

   return (
      <PageLayout
         title="Personal Info"
         subtitle="Please provide your name, email address and phone number."
         buttonTitle="Next Step"
         onClick={() => router.push("/plan")}
         disabled={!buttonDisabled}
      >
         <form className="space-y-14 text-indigo-900">
            <div className="flex flex-col gap-6">
               <label>
                  <span className="text-sm font-semibold">Name</span>
                  <Input valueProps={nameProps} type="text" />
                  {nameProps.error && (
                     <p className="text-red-600 text-xs text-right mt-0.5">
                        {nameProps.error}
                     </p>
                  )}
               </label>
               <label>
                  <span className="text-sm font-semibold">Email Address</span>
                  <Input valueProps={emailProps} type="email" />
                  {emailProps.error && (
                     <p className="text-red-600 text-xs text-right mt-0.5">
                        {emailProps.error}
                     </p>
                  )}
               </label>
               <label className="text-sm font-semibold">
                  <span>Phone Number</span>
                  <Input valueProps={phoneProps} type="tel" />
                  {phoneProps.error && (
                     <p className="text-red-600 text-xs text-right mt-0.5">
                        {phoneProps.error}
                     </p>
                  )}
               </label>
            </div>
         </form>
      </PageLayout>
   );
}
