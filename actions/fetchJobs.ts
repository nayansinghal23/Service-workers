"use server";

import prisma from "@/lib/db";

export const fetchJobs = async () => {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      jobs,
    };
  } catch (error) {
    console.log(`Error while fetching jobs : ${error}`);
    return {
      jobs: [],
      error: "Failed to fetch jobs",
    };
  }
};
