const { optimizeImage } = require('next/dist/server/image-optimizer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {   
        domains: ['res.cloudinary.com'],
        path: "",
        unoptimized: true,
    },
    env: {
        APP_URL: "https://elims1.vercel.app/",
        APP_SERVER: "https://elims1.vercel.app/"
    }
}


module.exports = nextConfig
