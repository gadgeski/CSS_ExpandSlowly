# Image Expand Slowly

画像の拡大アニメーション効果を実装した Web ページです。

## 機能

- **ホバー拡大**: 画像にマウスを乗せると 1.3 倍に拡大（1 秒のトランジション）
- **自動画像切り替え**: 4 秒間隔で画像を自動切り替えしながら拡大アニメーション表示

## 技術仕様

- CSS `scale` プロパティと `transition` を使用したアニメーション
- JavaScript で画像の自動切り替え制御
- `opacity` と `scale` を組み合わせたフェードイン・拡大効果
