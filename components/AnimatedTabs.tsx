"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const tabs = ["Student", "Teacher", "Officers & Staff"];

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("userType", tabs[0].replace(" ", "").toLocaleLowerCase());
  }, []);

  return (
    <div className="w-full mb-5 mt-10">
      {/* Tabs */}
      <div className="flex space-x-2 justify-center bg-gray-100 p-2 rounded-lg relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setActiveTab(tab);
              setValue("userType", tab.replace(" ", "").toLocaleLowerCase());
            }}
            className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab ? "text-white" : "text-gray-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-blue-500 rounded-lg z-[-1]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
