#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
echo 'Run build...'
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

echo 'Git init...'
git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
echo 'Git push...'
 git push -f git@github.com:ostkost/vue-stock-trader.git master:gh-pages

cd -