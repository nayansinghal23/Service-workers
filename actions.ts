"use server";

import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:nayansinghal393@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

let subscription: PushSubscription | null = null;

export async function subscribeUser(sub: PushSubscription) {
  subscription = sub;
  return { success: true };
}

export async function unsubscribeUser() {
  subscription = null;
  return { success: true };
}

export async function sendNotification(message: string) {
  if (!subscription) throw new Error("No subscription available");

  try {
    // Ensure the subscription object matches the expected type for webpush
    const { endpoint, expirationTime, keys } = subscription as any;
    const pushSubscription = {
      endpoint,
      expirationTime,
      keys: {
        p256dh: keys?.p256dh,
        auth: keys?.auth,
      },
    };
    const result = await webpush.sendNotification(
      pushSubscription,
      JSON.stringify({
        title: "Test Notification",
        body: message,
        icon: "/icon.png",
      })
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
