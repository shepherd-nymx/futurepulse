import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

// Ship the real home page content in HTML so crawlers need no JavaScript.
// React takes over normally on load, including existing hash-based navigation.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(createElement(App));
  if (!markup.includes('Future Pulse') || !markup.includes('<h1')) {
    throw new Error('Prerendered home page is missing its primary content');
  }
  const path = new URL('../dist/index.html', import.meta.url);
  const html = await readFile(path, 'utf8');
  const placeholder = '<div id="root"></div>';
  if (!html.includes(placeholder)) throw new Error('Missing root placeholder');
  await writeFile(path, html.replace(placeholder, `<div id="root">${markup}</div>`));
  console.log('Prerendered home page for search engines and non-JavaScript visitors.');
} finally {
  await server.close();
}
