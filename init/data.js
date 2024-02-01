const sampleListing = [
    {
        title: "Grand Bay Resort",
        description: "Experience luxury and comfort at our exquisite resort nestled along the beautiful bay, offering breathtaking views.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 450.00,
        location: "Miami",
        country: "United States"
    },
    {
        title: "Tranquil Gardens Hotel",
        description: "Escape to our serene hotel surrounded by lush gardens, a perfect retreat for relaxation and rejuvenation.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 320.50,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "City Lights Inn",
        description: "Embrace the bustling city life from our centrally located inn, offering convenience and modern amenities.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 180.75,
        location: "London",
        country: "United Kingdom"
    },
    // ... (more entries)
    {
        title: "Serenity Cove Resort",
        description: "Relax and unwind at our secluded resort, where the peaceful cove and natural surroundings create a serene atmosphere.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 550.25,
        location: "Phuket",
        country: "Thailand"
    },
    // Additional entries
    {
        title: "Royal Palace Hotel",
        description: "Experience royalty and opulence at our historic palace turned into a luxury hotel, offering a glimpse into the past.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 750.00,
        location: "Vienna",
        country: "Austria"
    },
    {
        title: "Sunset Beach Retreat",
        description: "Enjoy stunning sunsets and tranquility at our beachfront retreat, a perfect escape for nature lovers.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 420.00,
        location: "Maui",
        country: "United States"
    },
    // ... (more entries)
    {
        title: "Alpine View Chalet",
        description: "Experience the charm of alpine living in our cozy chalet, surrounded by snow-capped mountains and natural beauty.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 300.75,
        location: "Zermatt",
        country: "Switzerland"
    },
    {
        title: "Luxury Beach Resort",
        description: "Indulge in luxury and relaxation at our beachfront resort, offering stunning views and top-notch amenities.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 350.50,
        location: "Malibu",
        country: "United States"
    },
    {
        title: "Mountain Retreat Lodge",
        description: "Escape to the mountains and enjoy nature's beauty from our cozy lodge, perfect for outdoor enthusiasts.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 220.00,
        location: "Aspen",
        country: "United States"
    },
    // ... (more entries)
    {
        title: "Riverside Hotel Oasis",
        description: "Experience tranquility by the river at our oasis-like hotel, offering a serene escape from city life.",
        image: "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.webp?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
        price: 280.25,
        location: "Kyoto",
        country: "Japan"
    }
];



module.exports = { data: sampleListing };