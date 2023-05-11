import { AddOn } from "@/types/AddOn";

export const addons: AddOn[] = [
   {
      title: "Online Services",
      subtitle: "Access to multiplayer games",
      type: [
         {
            name: "mo",
            price: 1,
         },
         {
            name: "yr",
            price: 10,
         },
      ],
   },
   {
      title: "Larger Storage",
      subtitle: "Extra 1TB of cloud save",
      type: [
         {
            name: "mo",
            price: 2,
         },
         {
            name: "yr",
            price: 20,
         },
      ],
   },
   {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      type: [
         {
            name: "mo",
            price: 2,
         },
         {
            name: "yr",
            price: 20,
         },
      ],
   },
];
