import Image from "next/image";
import checkImg from "../../assets/images/icon-thank-you.svg";

const Finish = () => {
   return (
      <div className="text-center flex flex-col text-indigo-900 h-full justify-center items-center w-full gap-3">
         <Image src={checkImg} alt="" />
         <h2 className="font-extrabold text-3xl">Thank you!</h2>
         <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to contact
            us.
         </p>
      </div>
   );
};

export default Finish;
