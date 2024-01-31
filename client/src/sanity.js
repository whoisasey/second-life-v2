import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
	projectId: "lqwr3lgt",
	dataset: "production",
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
	// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPages() {
	const pages = await client.fetch('*[_type == "page"]');
	return pages;
}

export async function createPage(page) {
	const result = client.create(page);
	return result;
}

export async function updateDocumentTitle(_id, title) {
	const result = client.patch(_id).set({ title });
	return result;
}
