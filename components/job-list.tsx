"use client";

import { useState } from "react";

import { Job } from "@/interfaces/interface";

import { getTypeColor } from "@/helper/getTypeColor";

const JobList = ({ jobs }: { jobs: Job[] }) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const displayDate = (date: Date): string => {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    alert(`Application submitted for ${job.title} at ${job.company}!`);
  };

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {job.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    {job.company}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {job.isRemote && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                      REMOTE
                    </span>
                  )}
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                      job.type
                    )}`}
                  >
                    {job.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {job.location}
                <span className="mx-2">•</span>
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {displayDate(job.updatedAt)}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {job.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Requirements:
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                {job.salary}
              </p>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-6">
              <button
                onClick={() => handleApply(job)}
                className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
