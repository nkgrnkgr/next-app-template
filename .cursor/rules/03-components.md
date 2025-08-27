# コンポーネント

- Tailwind / `cva` を使ってよいのは `src/components/**` のみ。
- API は最小限で明確に。合理的な既定値を提供。
- 一度きりの props は避け、まず variant で表現できないか検討。
- DOM を増やさないために、必要に応じて `asChild` を提供。
