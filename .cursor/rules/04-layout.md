# レイアウト

- `src/components/layout` のプリミティブを使用:
  - `Flex`（中核）、`Stack`（column 既定）、`Inline`（row 既定）、`Center`（中央寄せ既定）。
- 中核は `Flex`。`Stack/Inline/Center` は可読性のための薄いラッパ。
- レイアウト調整は variant を追加して対応。page/feature でのクラス直書きは不可。
- `Spacer` は当面使わない方針。必要性が明確になった時点で再検討。
