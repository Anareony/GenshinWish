set -e

npm run build

git add -A
git commit -m 'deploy'
git push -f https://github.com/Anareony/genshinwish.git master