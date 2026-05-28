# Hero video

Drop a single MP4 here named `hero.mp4` and the homepage hero will play it automatically.

Recommended source:
- 1920×1080, H.264 (Main profile), AAC audio stripped, ~8–12 MB
- 10–25 second loop, cuts on the beat so the seam is invisible
- Slow, cinematic motion (slow-mo gym shots, dolly/jib, soft light)

Until you add the file, the hero falls back to a Ken-Burns animated poster image — it still looks great.

## Why self-hosted?
Pexels, Mixkit, Pixabay and Coverr all now return 403 on direct `<video>` tag hotlinking. Self-hosting is the only reliable, brand-safe answer for a hero asset.

## How to convert
```bash
ffmpeg -i input.mov -vf scale=1920:-2 -c:v libx264 -profile:v main -crf 23 -preset slow \
       -an -movflags +faststart public/videos/hero.mp4
```

The `+faststart` flag puts the moov atom at the front so the browser can start playing before the file finishes downloading.
