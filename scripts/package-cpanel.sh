#!/bin/sh
# Production build (abollbunnamfi.com, indexable) zipped for cPanel File Manager upload into public_html.
set -e
cd "$(dirname "$0")/.."
rm -rf dist
env -u SITE -u BASE -u PUBLIC_NOINDEX pnpm build
python3 ../../scripts/check-emdash.py dist
mkdir -p release
out="release/aboll-bunna-site-$(date +%Y-%m-%d).zip"
rm -f "$out"
(cd dist && zip -qr "../$out" . -x '.DS_Store')
echo "Ready: $(pwd)/$out"
