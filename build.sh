#!/usr/bin/env zsh
npx esbuild index.ts \
  --external:pg-native --inject:shims/shims.js \
  --bundle --format=esm \
  --minify --define:debug=false | \
tee >((echo 'const tlsWasm = "./shims/net/tls.wasm";' && cat -) > dist-browser/index.js) | \
  (echo 'import tlsWasm from "../shims/net/tls.wasm";' && cat -) > dist-cf/index.js
