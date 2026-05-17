## Mobile View Fixes

Pure CSS/Tailwind class adjustments in `src/pages/Index.tsx`. No copy, color, or logic changes.

### 1. Top navigation (overflows right edge at 390px)
- Allow the nav pill to scroll horizontally on small screens or shrink padding/font.
- Reduce `px-3 md:px-4 py-2` inside links to `px-2 py-1.5` on mobile.
- Reduce nav pill outer padding `px-2 py-1.5` → tighter on mobile, and lower font from `text-sm` baseline.

### 2. Hero `ECCE JAZZ BAND` H1 (squeezed by hardcoded 50px margins)
- Replace `mx-px mr-[50px] mb-[50px] ml-[50px] mt-[50px]` and `pl-[20px] pt-[20px] pr-[20px] pb-[20px]` with responsive equivalents: `mx-2 my-6 p-3 sm:mx-12 sm:my-12 sm:p-5`.
- Keep `text-5xl sm:text-7xl md:text-8xl` so the title scales down properly.

### 3. SINGEL "ZAHORAMI" heading clipped inside pill
- Change `text-5xl md:text-7xl` → `text-4xl md:text-7xl` so wide letter-spacing fits the pill on mobile.
- Reduce pill horizontal padding on mobile: `px-10 py-12 md:px-16 md:py-14` → `px-6 py-10 md:px-16 md:py-14`.

### 4. Members section — names/roles off-center
- Remove `-translate-x-3` and `mr-[50px] mt-0` from the name `<span>`.
- Remove `-translate-x-3 mx-[50px] ml-0` from the role `<p>`.
- Result: names and roles centered under each portrait.

### 5. About ("O kapele") section — text touches mobile edges
- The inner grid currently has `px-0`. Add responsive padding: `px-6 md:px-0`.

### 6. Language switcher
- Minor: ensure it doesn't push the nav to a third wrapped row. Move it inline with the logo on mobile via flex ordering, or leave wrap as-is (low priority).

### Technical notes
All changes are className edits inside `src/pages/Index.tsx`. No new components, no new files, no changes to `i18n.tsx`, `index.css`, or Tailwind config.

### Out of scope
- Translations / copy
- Colors and design tokens
- Section reordering
- Desktop layout (changes are gated by `sm:`/`md:` prefixes so desktop stays identical)
