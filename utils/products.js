const products = [
  {
    id: 1,
    name: "Nike Air Max 90",
    title: "Classic Air Max 90 Sneakers",
    price: 129.99,
    description:
      "Experience the iconic style and unmatched comfort of the Nike Air Max 90. These sneakers have been a staple in streetwear culture for decades, boasting a timeless design that never goes out of fashion. Whether you're hitting the gym or strolling through the city, these sneakers will keep you looking fresh and feeling comfortable.",
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    title: "High-Performance Ultraboost Sneakers",
    price: 179.99,
    description:
      "Elevate your running game with the Adidas Ultraboost. These sneakers are engineered to provide a responsive cushioning system that propels you forward with each step. The sleek design not only enhances your performance but also adds a touch of modern style to your athletic ensemble. Whether you're a professional athlete or a casual jogger, these Ultraboost sneakers are a must-have for your collection.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Puma RS-X",
    title: "Modern RS-X Sneakers",
    price: 99.99,
    description:
      "Step into the future with the Puma RS-X sneakers. These sneakers are not just footwear; they're a statement of bold design and unapologetic comfort. The futuristic silhouette is complemented by intricate details that catch the eye from every angle. Perfect for trendsetters and sneaker enthusiasts alike, the RS-X series is all about pushing the boundaries of style and innovation.",
    image:
      "https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "New Balance 990",
    title: "Classic 990 Series Sneakers",
    price: 149.99,
    description:
      "Step into heritage style with the New Balance 990 sneakers. These sneakers are more than just shoes; they're a nod to time-tested design and comfort that has stood the test of generations. The 990 series boasts premium materials, superior craftsmanship, and unmatched comfort that make them perfect for everyday wear. Elevate your style with a touch of classic elegance.",
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Reebok Classic Leather",
    title: "Timeless Classic Leather Sneakers",
    price: 79.99,
    description:
      "Embrace vintage vibes with the Reebok Classic Leather sneakers. These sneakers aren't just shoes; they're a testament to enduring style that never goes out of trend. The classic leather upper provides a sophisticated touch, while the comfortable cushioning ensures all-day wearability. Whether you're hitting the streets or dressing up a casual outfit, these sneakers add a touch of timeless elegance.",
    image:
      "https://images.unsplash.com/photo-1613972798457-45fc5237ae32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxzaG9lc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Converse Chuck Taylor",
    title: "Classic Chuck Taylor High Tops",
    price: 59.99,
    description:
      "Experience the timeless cool of Converse Chuck Taylor high tops. These sneakers have been an emblem of casual style for generations, making them a must-have for your collection. Whether you're pairing them with jeans or dressing down a semi-formal outfit, these high tops add a touch of versatile flair to any ensemble. Step into history and showcase your individuality.",
    image:
      "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Vans Old Skool",
    title: "Classic Old Skool Skate Shoes",
    price: 64.99,
    description:
      "Rock the iconic Vans Old Skool skate shoes for timeless style and street cred. These sneakers pay homage to the classic skateboarding culture while remaining a staple in modern fashion. With their signature side stripe and durable construction, the Old Skool shoes offer both style and functionality. Whether you're hitting the half-pipe or the city streets, these sneakers ensure you stand out.",
    image:
      "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    name: "Under Armour HOVR",
    title: "HOVR Series Performance Sneakers",
    price: 119.99,
    description:
      "Unleash your potential with Under Armour HOVR performance sneakers. These sneakers aren't just footwear; they're engineered to optimize your comfort and support. The HOVR technology provides a responsive cushioning system that helps you go the extra mile. Whether you're hitting the gym or embarking on a running journey, these sneakers will help you achieve your fitness goals.",
    image:
      "https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

module.exports = products;
