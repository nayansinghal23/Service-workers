self.addEventListener("push", function (event) {
  try {
    if (event.data) {
      const data = event.data.json();
      const options = {
        body: data.body,
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: "2",
        },
      };
      event.waitUntil(self.registration.showNotification(data.title, options));
    }
  } catch (error) {
    console.log(error);
  }
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow("https://localhost:3000"));
});
