import React from "react";

export const Tooltip = ({ message, children }: { message: string, children: string }) => {
    return (
        <div className="relative flex flex-col items-center group">
        {children}
        <div className="absolute top-0 -right-10 md:right-auto w-56 flex-col items-center hidden mt-6 group-hover:flex">
          <span className="relative z-10 p-3 text-xs text-black whitespace-no-wrap bg-white shadow-lg rounded-md">{message}</span>
        </div>
      </div>
    );
};