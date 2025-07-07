
/**
 * Injects Tailwind classes into HTML elements within provided HTML content.
 */
export function styleBlogHtml(html: string): string {
  // Add Tailwind classes to heading elements
  html = html.replace(
    /<h1(.*?)>/g,
    '<h1$1 class="mt-12 mb-6 text-3xl sm:text-4xl font-bold text-[#2D5BFF]">'
  );
  html = html.replace(
    /<h2(.*?)>/g,
    '<h2$1 class="mt-10 mb-4 text-2xl sm:text-3xl font-semibold text-[#2D5BFF]">'
  );
  html = html.replace(
    /<h3(.*?)>/g,
    '<h3$1 class="mt-8 mb-3 text-xl sm:text-2xl font-semibold text-[#2D5BFF]">'
  );

  // Add Tailwind classes to text elements
  html = html.replace(
    /<p(.*?)>/g,
    '<p$1 class="mb-5 text-base leading-relaxed text-gray-700">'
  );
  html = html.replace(
    /<ul(.*?)>/g,
    '<ul$1 class="mb-5 pl-5 list-disc space-y-2 text-gray-700">'
  );
  html = html.replace(
    /<ol(.*?)>/g,
    '<ol$1 class="mb-5 pl-5 list-decimal space-y-2 text-gray-700">'
  );
  html = html.replace(
    /<li(.*?)>/g,
    '<li$1 class="ml-4">'
  );
  
  // Add Tailwind classes to links and other elements
  html = html.replace(
    /<a(.*?)>/g,
    '<a$1 class="text-primary hover:underline">'
  );
  html = html.replace(
    /<blockquote(.*?)>/g,
    '<blockquote$1 class="pl-4 border-l-4 border-primary italic my-6 text-gray-600">'
  );
  html = html.replace(
    /<code(.*?)>/g,
    '<code$1 class="px-2 py-1 bg-gray-100 rounded text-sm font-mono">'
  );
  
  return html;
}
