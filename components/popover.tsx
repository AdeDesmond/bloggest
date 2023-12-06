"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

export const Popover = ({ children }: any) => {
  return (
    <div
      onClick={() => {}}
      className="fixed inset-0 bg-white md:bg-black md:bg-opacity-80 flex md:items-center"
    >
      <Button
        onClick={() => {}}
        className="hidden md:block  fixed top-4 right-4"
      >
        ❌
      </Button>
      <div className="w-full">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white md:max-w-2xl md:mx-auto md:rounded-lg md:overflow-hidden"
        >
          <div className="relative min-h-[4rem] md:min-h-0">
            <Button
              onClick={() => {}}
              className="absolute top-4 left-8 md:hidden text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </Button>
          </div>
          {/* this will be the children   */}
          {children}
        </div>
      </div>
    </div>
  );
};
