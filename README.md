# Faisal Ali — Portfolio

A static portfolio site. No build step, no dependencies — just HTML, CSS, and
one small JS file. It works the moment you push it to GitHub Pages.

## Files

| File | What it is |
|------|------------|
| `index.html` | Home page — hero, project grid, about, contact |
| `battery-handling.html` | Full write-up for the flagship project |
| `app.js` | The project list. **Edit this to add projects.** |
| `style.css` | All styling |

## Publish it on GitHub Pages

1. Create a new repository. To get the clean URL `faisalali0801.github.io`,
   name the repo exactly `faisalali0801.github.io`. (Any other name works too —
   it just gives you `faisalali0801.github.io/repo-name/`.)
2. Upload all four files to the root of the repo (drag-and-drop in the browser
   is fine: **Add file -> Upload files**).
3. Go to **Settings -> Pages**. Under **Build and deployment**, set
   **Source** to *Deploy from a branch*, pick the `main` branch and the `/root`
   folder, and **Save**.
4. Wait ~1 minute, then open the URL shown on that Pages settings screen.

## Add a new project

Open `app.js`. Copy one project block, paste it into the `PROJECTS` array, and
edit the fields:

```js
{
  pid: "P-03",
  title: "Project title",
  blurb: "One or two sentences on what it does and why it matters.",
  tags: ["Tool", "Protocol", "Language"],
  metric: { value: "00", label: "unit · context" },
  status: "In progress",
  link: ""   // "detail.html" for a write-up page, or a "https://github.com/..." repo URL
}
```

- Order in the array = order on the page.
- `link` can point to an internal write-up page (like `battery-handling.html`)
  or straight to a GitHub repo. Leave it as `""` and the card shows but isn't
  clickable.
- Only one project should have `featured: true` — that's the big hero card.

## Add a write-up page for a project

Duplicate `battery-handling.html`, rename it (e.g. `tablet-station.html`), edit
the content, and set that filename as the project's `link` in `app.js`.

## Things to update before sharing

- Email, LinkedIn, and GitHub links appear in `index.html` (Contact section)
  and the footer — they currently use your details; confirm they're right.
- The second project (Tablet Filling Station) links to your GitHub profile as a
  placeholder. Swap it for the actual repo or a write-up page when ready.
