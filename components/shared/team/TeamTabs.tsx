'use client';

import { useEffect, useMemo, useState } from "react";
import { TeamCard } from "./TeamCard";
import { getAllTeamMembers } from "@/lib";
import { Tabs, Tab } from "@heroui/react";
import { Section_Heading } from "../Section_Heading";
import { Section_Paragraph } from "../Section_Paragraph";

const allMembers = getAllTeamMembers();

export function TeamTabs() {
  const executives = useMemo(
    () => allMembers.filter((member) => member.role === "executive"),
    []
  );
  const advisors = useMemo(
    () => allMembers.filter((member) => member.role === "advisor"),
    []
  );

  const tabs = [
    {
      id: "advisory",
      label: "Advisory",
      content: advisors.map((member) => (
        <TeamCard key={member.id} team={member} />
      )),
      count: advisors.length,
    },
    {
      id: "executive",
      label: "Executive",
      content: executives.map((member) => (
        <TeamCard key={member.id} team={member} />
      )),
      count: executives.length,
    },
  ];

  const [selectedTab, setSelectedTab] = useState("advisory");

  // On mount, set tab based on URL hash
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash === "executive" || hash === "advisory") {
      setSelectedTab(hash);
    }
  }, []);

  return (
    <>
      <div className="mt-8 mb-4 space-y-4 ps-0 lg:ps-[8%]">
        <Section_Heading lgSize="56px" title="Meet the team" />
        <Section_Paragraph paragraph="Get to know the passionate professionals behind our program" />
      </div>

      <div className="flex flex-col items-center justify-center px-0 lg:px-2">
        <Tabs
          selectedKey={selectedTab}
          onSelectionChange={(key) => setSelectedTab(String(key))}
          aria-label="Dynamic tabs"
          items={tabs}
          color="primary"
          size="lg"
          radius="full"
          variant="light"
          className="flex mx-auto justify-center items-center rounded-full bg-[#44B5D01A]/10 border border-gray-100"
        >
          {(item) => (
            <Tab
              key={item.id}
              title={item.label}
              className="w-full py-4 text-xl font-medium transition-colors px-16 font-sans data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <div className="w-full mt-6">
                <div className="flex flex-wrap justify-center gap-6">
                  {item.content}
                </div>
              </div>
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
}
