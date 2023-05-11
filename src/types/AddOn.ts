export type AddOn = {
   title: string;
   subtitle: string;
   type: {
      name: "mo" | "yr";
      price: number;
   }[];
};
