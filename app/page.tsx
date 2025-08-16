import PushNotificationManager from "@/components/push-notification-manager";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <svg
              className="w-8 h-8 mr-3 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Service Worker Demo
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Experience the power of Progressive Web Apps with push notifications
            and offline capabilities
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Push Notifications Section */}
        <div className="space-y-4">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-blue-500 rounded-full mr-3"></div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Push Notifications
            </h2>
          </div>
          <PushNotificationManager />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>Built with Next.js and Service Workers</p>
            <p className="mt-1">Experience the future of web applications</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
