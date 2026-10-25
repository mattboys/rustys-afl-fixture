# Rusty's AFL Fixture Lab

An interactive GitHub Pages companion to the AFL fixture scheduling specification in [`docs/`](docs/).

## Run locally

Serve this directory over HTTP so the site can fetch and render the Markdown source documents:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the repository root to GitHub Pages on pushes to `main` and on manual dispatch. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The supplied specification has unresolved fixture data. The site presents the complete documented material and audits candidate JSON schedules, but does not claim to generate a valid season until missing round assignments, conditional opponents, and game dates are provided.