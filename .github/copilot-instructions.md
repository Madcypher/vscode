# Vibe Coding Cafe — Copilot Instructions

## Project Overview

**Vibe Coding Cafe** is a marketing/landing page for a members-only co-working space with a demo membership access system. It's a static HTML site with vanilla JavaScript and CSS that simulates door access control via subscription tokens.

**Tech Stack:** HTML5, vanilla JavaScript (ES6), CSS3 (CSS variables, Grid, Flexbox)  
**Current Branch:** v3-branch (likely part of a multi-version project)

## Architecture & Key Files

### File Structure
- `index.html` — Main landing page with 5 sections: header, hero, about, features, membership form, footer
- `styles.css` — Styling with dark theme (CSS variables: `--bg`, `--card`, `--accent`, `--muted`); uses modern layouts (Grid, Flexbox, glassmorphism)
- `script.js` — Event-driven access logic; handles membership form submission and door state management
- `PREVIEW.md` — Demo instructions (demo token: `VIBE123`)

### Component Organization

1. **Header** (`site-header`): Branding + navigation with sticky styling (backdrop blur)
2. **Hero Section**: Sales pitch with CTA buttons and mock cafe visual
3. **Features** (`features` section): Marketing points about quiet zones, Wi‑Fi, events
4. **Membership** (`membership` section): Access form with email + token inputs, door status display
5. **Footer**: Copyright info

## Key Patterns & Conventions

### JavaScript Logic Pattern
- **Event-driven:** `DOMContentLoaded` initializes listeners on form submission
- **State via CSS classes:** Door state is toggled using `.locked` / `.open` classes that change background and text color
- **Hard-coded validation:** Token check is `token === "VIBE123"` (demo only; production would use backend)
- **Minimal JS:** No frameworks; direct DOM manipulation via `getElementById()` and `classList`

### CSS Conventions
- **Dark theme palette** via CSS variables (`.root`): dark backgrounds (`#0f1724`), purple accent (`#7c3aed`), muted gray text (`#9aa4b2`)
- **Glassmorphism effect:** `backdrop-filter: blur()`, `rgba()` for transparency, used in `.site-header` and `.mock-cafe`
- **Semantic naming:** Classes describe function (`.access-form`, `.door`, `.cta`) not appearance
- **Responsive:** Mobile breakpoint at `900px`; hero grid switches to single column

### HTML Accessibility
- `aria-label` on forms (`"Membership access form"`)
- `aria-live="polite"` on dynamic content (door status)
- `aria-hidden="true"` on decorative visuals (mock cafe)
- Semantic HTML5 (`<header>`, `<main>`, `<footer>`, `<form>`)

## Development Workflow

### Local Preview
Open `index.html` directly in browser (no build step needed). Demo token: `VIBE123`

### Common Tasks
- **Styling updates:** Edit `styles.css`; use CSS variables for consistency
- **Form logic changes:** Modify form event listener in `script.js` (currently checks token equality)
- **Content updates:** Edit HTML sections in `index.html` (e.g., feature list, CTAs)
- **Branching info:** Current is `v3-branch`; check Git history for prior versions and reasoning

## Integration Points & Dependencies

- **External dependencies:** None (vanilla JavaScript, no npm)
- **Form behavior:** Currently client-side only; production deployment would need backend validation API
- **Access control:** Placeholder for future integration with membership database or OAuth

## Important Notes for Future Development

1. **Token validation is hardcoded demo logic** — real system needs backend service
2. **No state persistence** — page refresh resets door state (intended for demo)
3. **CSS theme is dark** — `body` background set to `white` but overridden by dark theme variables; clarify intent if refactoring
4. **Multiple versions exist** — v3-branch suggests iterative product; check prior commits for context on design decisions

---

**Last Updated:** Project structure stable as of current preview.  
**Questions?** Refer to `PREVIEW.md` for demo instructions or check Git history for version context.
