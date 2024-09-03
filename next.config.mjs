/** @type {import('next').NextConfig} */
const nextConfig = {
    // Development mode
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'http',
    //             hostname: 'localhost',
    //             port: '8000',
    //             pathname: '/media/**',
    //         },
    //     ],
    // },
    // Production mode
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vbappback-74cfafa1439d.herokuapp.com',
                pathname: '/media/**',
            },
        ],
    },
};

export default nextConfig;
