# Project screenshots

Drop your project images here, one folder per project slug:

```
static/projects/
├── docagent/
│   ├── 1.png        ← used as the card thumbnail
│   ├── 2.png
│   └── ...
├── accessible-finance/
│   ├── 1.png
│   └── 2.png
├── ai-quran/
│   └── 1.png
├── commerce/
│   ├── 1.png
│   └── 2.png
├── rainfall/
│   └── 1.png
└── habit-tracker/
    ├── 1.png
    └── 2.png
```

## Specs
- **Format**: .png, .jpg, or .webp (webp recommended for size)
- **Dimensions**: 1600×1000 ideal (16:10), minimum 1200×750
- **First image** (`1.png`) is shown on the project card thumbnail
- **All images** are shown in the modal gallery as a swipeable carousel
- Add as many as you want — `2.png`, `3.png`, `4.png` …

## Adding more projects
Edit `src/lib/projects.ts` and add a new entry. The `slug` must match the folder name here, and the `images` array lists the file paths (relative to `/static`).

## If you don't have a screenshot yet
That's fine — the card will fall back to a clean accent-tinted panel with the project's first letter. No broken image icons.
