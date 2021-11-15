/** @see https://nextjs.org/docs/basic-features/eslint#eslint-plugin */
module.exports = {
  rules: {
    // Enforce optional or swap font-display behavior with Google Fonts
    // https://nextjs.org/docs/messages/google-font-display
    '@next/next/google-font-display': 'error',

    // Enforce preconnect usage with Google Fonts
    // https://nextjs.org/docs/messages/google-font-preconnect
    '@next/next/google-font-preconnect': 'error',

    // Enforce id attribute on next/script components with inline content
    // https://nextjs.org/docs/messages/inline-script-id
    '@next/next/inline-script-id': 'error',

    // Enforce passHref prop usage with custom Link components
    // https://nextjs.org/docs/messages/link-passhref
    '@next/next/link-passhref': 'warn',

    // Prefer next script component when using the inline script for Google Analytics
    // https://nextjs.org/docs/messages/next-script-for-ga
    '@next/next/next-script-for-ga': 'warn',

    // Prevent manual stylesheet tags
    // https://nextjs.org/docs/messages/no-css-tags
    '@next/next/no-css-tags': 'warn',

    // Disallow importing next/document outside of pages/document.js
    // https://nextjs.org/docs/messages/no-document-import-in-page
    '@next/next/no-document-import-in-page': 'error',

    // Enforce no duplicate usage of <Head> in pages/document.js
    // https://nextjs.org/docs/messages/no-duplicate-head
    '@next/next/no-duplicate-head': 'error',

    // Disallow importing next/head in pages/document.js
    // https://nextjs.org/docs/messages/no-head-import-in-document
    '@next/next/no-head-import-in-document': 'error',

    // Prohibit HTML anchor links to pages without a Link component
    // https://nextjs.org/docs/messages/no-html-link-for-pages
    '@next/next/no-html-link-for-pages': 'error',

    // Prohibit usage of HTML <img> element
    // https://nextjs.org/docs/messages/no-img-element
    '@next/next/no-img-element': 'warn',

    // Prevent page-only custom fonts
    // https://nextjs.org/docs/messages/no-page-custom-font
    '@next/next/no-page-custom-font': 'warn',

    // Disallow importing next/script inside pages/_document.js
    // https://nextjs.org/docs/messages/no-script-in-document-page
    '@next/next/no-script-in-document': 'error',

    // Disallow using next/script inside the next/head component
    // https://nextjs.org/docs/messages/no-script-in-head-component
    '@next/next/no-script-in-head': 'error',

    // Forbid synchronous scripts
    // https://nextjs.org/docs/messages/no-sync-scripts
    '@next/next/no-sync-scripts': 'error',

    // Disallow using <title> with Head from next/document
    // https://nextjs.org/docs/messages/no-title-in-document-head
    '@next/next/no-title-in-document-head': 'warn',

    // Ensure no typos were made declaring Next.js's data fetching function
    // https://nextjs.org/docs/basic-features/data-fetching
    '@next/next/no-typos': 'error',

    // Prevent duplicate polyfills from Polyfill.io
    // https://nextjs.org/docs/messages/no-unwanted-polyfillio
    '@next/next/no-unwanted-polyfillio': 'warn',
  },
};
