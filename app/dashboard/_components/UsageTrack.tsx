"use client"
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect, useState, useCallback } from "react";
import { HISTORY } from "../history/page";

function UsageTrack() {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const { user } = useUser();

  // Memoize the data fetching function
  const GetData = useCallback(async () => {
    if (!user) return;
    
    try {
      {/* @ts-ignore */}
      const result: HISTORY[] = await db.select().from(AiOutput).where(
        eq(AiOutput.createdBy, user.primaryEmailAddress?.emailAddress)
      );
      GetTotalUsage(result);
    } catch (error) {
      console.error("Error fetching usage data:", error);
    }
  }, [user]);

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach(element => {
      total = total + Number(element.aiResponse?.split(" ").length);
    });
    setTotalUsage(total);
  };

  useEffect(() => {
    if (!user) return;

    // Initial fetch
    GetData();
    
    // Set up polling (every 5 seconds)
    const intervalId = setInterval(GetData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [user, GetData]);

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${(totalUsage / 10000) * 100}%` }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 Credits Used</h2>
      </div>
      <Button variant={'secondary'} className="text-primary w-full my-3 font-semibold">
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;