set -e

npm run build

cd dist

git init
git add -A 
git commit -m 'New deployment'
git push -f https://github.com/JayvenC/JayvenC.github.io.git master:gh-pages

cd -