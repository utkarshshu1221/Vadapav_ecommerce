const feedItems = [
  // Instagram local storage
  {
    type: "instagram",
    imageUrl: "/vada-pav.jpg",
    author: "Ravi T.",
    platform: "Instagram Post",
  },
  {
    type: "instagram",
    videoUrl: "/insta-reel1.mp4",
    author: "Sneha",
    platform: "Instagram Reel",
  },

  // YouTube direct embed
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/7XRaejdMUQ4?si=amO0tuUuKnMyFlPZ",
    imageUrl: "https://img.youtube.com/vi/7XRaejdMUQ4/hqdefault.jpg", // YouTube thumbnail
    text: "Sample YouTube Video",
    author: "Sneha",
    platform: "YouTube",
  },
  {
    type: "google",
    text: "Loved the chutney variety and hygiene. Truly Mumbai street food vibes!",
    author: "Amit K.",
    url: "https://www.google.com/maps/place/Hare+Krishna+Bada+Pav/reviews",
    platform: "Google Review",
  },
];

export default feedItems;
