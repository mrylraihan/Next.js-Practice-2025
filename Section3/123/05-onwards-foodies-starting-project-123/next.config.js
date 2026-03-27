/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: '5mb', // or '10mb', etc.
		},
	},
}

module.exports = nextConfig
