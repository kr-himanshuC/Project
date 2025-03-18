import React from "react";
import data from "@/app/Data";
import Link from "next/link";

 const Card = async ({params}:any) => {
    const id = params.id;
    console.log(id);
    
    const card :any  = data.filter((c)=> c.id === id);
    console.log(card);
    

  return (
    <div className="">
      <div
        className="max-w-sm w-[50rem] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img className="rounded-t-lg w-[20rem]" src={card[0].img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card[0].title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {card[0].desc}
          </p>
          <Link
            href="/profile"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
