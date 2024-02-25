cd site &&
rm -rf dist &&
#pnpm docs:build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M gh-pages &&
git push -f git@github.com:adekang/mist-vue.git gh-pages &&
git push -f git@gitee.com:adekang/mist-vue.git gh-pages &&
cd ../ &&
cd ../ &&
cd -
