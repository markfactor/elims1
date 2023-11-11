const { optimizeImage } = require('next/dist/server/image-optimizer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {   
        domains: ['res.cloudinary.com'],
        path: "",
        unoptimized: true,
    },
    env: {
        APP_URL: "http://localhost:3000/",
        APP_SERVER: "http://localhost:3001/"
    }
}


module.exports = nextConfig
