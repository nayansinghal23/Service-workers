import JobHeader from "@/components/job-header";
import JobList from "@/components/job-list";
import SWRegister from "@/components/sw-register";

import { fetchJobs } from "@/actions/fetchJobs";

const JobsPage = async () => {
  const { jobs, error } = await fetchJobs();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <JobHeader />
      <SWRegister />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {jobs.length === 0 || error ? (
          <div className="text-center py-12">
            <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No jobs available currently
            </p>
          </div>
        ) : (
          <JobList jobs={jobs} />
        )}
      </div>
    </div>
  );
};

export default JobsPage;
