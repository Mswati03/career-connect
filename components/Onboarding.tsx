"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { SetStateAction, useState } from "react";
import CandidateSignupForm from "./CandidateOnboardingForm";
import RecruiterSignupForm from "./RecruiterOnboardingForm";

const Onboarding = () => {
  const [currentTab, setCurrentTab] = useState("candidate");

  function handleTabChange(value: SetStateAction<string>) {
    setCurrentTab(value);
  }

  return (
    <div className="bg-white">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
      <div className="space-y-12">
          <div className="flex items-baseline justify-center border-b gap-20 ">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Let us get to know you 
            </h1>
            <TabsList className="flex space-x-2">
              <TabsTrigger
                value="candidate"
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentTab === "candidate"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Candidate
              </TabsTrigger>
              <TabsTrigger
                value="recruiter"
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentTab === "recruiter"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Recruiter
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="pt-8">
          <TabsContent
            value="candidate"
            className="mx-auto w-11/12 max-w-4xl px-4 py-6"
          >
            <CandidateSignupForm />
          </TabsContent>
          <TabsContent
            value="recruiter"
            className="mx-auto w-11/12 max-w-4xl px-4 py-6"
          >
            <RecruiterSignupForm />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Onboarding;
