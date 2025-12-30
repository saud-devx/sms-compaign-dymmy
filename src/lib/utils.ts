
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to transform blog URLs to actualites
export function transformBlogUrls(url: string): string {
  // Check if the URL starts with '/blog' or contains '/blog/'
  if (url.startsWith('/blog')) {
    return url.replace('/blog', '/actualites');
  } else if (url.includes('/blog/')) {
    return url.replace('/blog/', '/actualites/');
  }
  return url;
}
