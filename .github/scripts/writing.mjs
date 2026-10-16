// Rebuilds the Writing section of README.md from the essays in ehnruiz/ehnruiz.github.io.
// Reads each post's front matter (title, subtitle, image), so a new essay or a renamed card shows up on the next run.
import { readFile, writeFile } from 'node:fs/promises';

const REPO = 'ehnruiz/ehnruiz.github.io';
const BRANCH = 'master';
const SITE = 'https://mister99.dev';
const START = '<!-- writing:start -->';
const END = '<!-- writing:end -->';

async function get(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'ehnruiz-profile' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}

function frontMatter(text) {
  const block = /^---\n([\s\S]*?)\n---/.exec(text)?.[1] ?? '';
  const fields = {};
  for (const line of block.split('\n')) {
    const m = /^(\w+):\s*(.*)$/.exec(line);
    if (m) fields[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
  }
  return fields;
}

const files = await (await get(`https://api.github.com/repos/${REPO}/contents/_posts?ref=${BRANCH}`)).json();
const essays = [];
for (const file of files.filter((f) => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(f.name))) {
  const fm = frontMatter(await (await get(file.download_url)).text());
  if (fm.kind && fm.kind !== 'essay') continue;
  const slug = file.name.slice(11, -3);
  essays.push({ ...fm, date: file.name.slice(0, 10), url: `${SITE}/essay/${slug}/`, image: fm.image && `${SITE}${fm.image}` });
}
essays.sort((a, b) => b.date.localeCompare(a.date) || b.title.localeCompare(a.title));
if (essays.length === 0) throw new Error('no essays found');

// Every card must load, or the run fails instead of committing a broken image.
for (const e of essays) if (e.image) await get(e.image);

const [latest, ...older] = essays;
const lines = ['<div align="center">', ''];
if (latest.image) {
  lines.push(`<a href="${latest.url}">`, `  <img src="${latest.image}" alt="${latest.title}" width="70%" />`, '</a>', '');
}
lines.push(`**[${latest.title}](${latest.url})**`);
if (latest.subtitle) lines.push(`*${latest.subtitle}*`);
lines.push('', '</div>');
if (older.length) {
  lines.push('', 'Earlier essays:', '');
  for (const e of older) lines.push(`- **[${e.title}](${e.url})**${e.subtitle ? `. ${e.subtitle}` : ''}`);
}

const readme = await readFile('README.md', 'utf8');
const start = readme.indexOf(START);
const end = readme.indexOf(END);
if (start < 0 || end < start) throw new Error('writing markers not found in README.md');
const next = `${readme.slice(0, start + START.length)}\n${lines.join('\n')}\n${readme.slice(end)}`;
if (next !== readme) await writeFile('README.md', next);
console.log(`${essays.length} essays, README ${next === readme ? 'unchanged' : 'updated'}`);
