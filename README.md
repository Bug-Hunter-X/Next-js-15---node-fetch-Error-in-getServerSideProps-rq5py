# Next.js 15 - node-fetch Error in getServerSideProps

This repository demonstrates a common error encountered when using `node-fetch` within the `getServerSideProps` function in a Next.js 15 application.  The issue arises because the standard `fetch` API is not directly available in the serverless function environment.

## Bug

The `bug.js` file shows the problematic code.  The use of `node-fetch` in `getServerSideProps` results in an error during server-side rendering. The solution involves using a fetch API compatible with the serverless environment.

## Solution

The `bugSolution.js` file provides a corrected implementation. It uses the built in `node-fetch` API appropriately.