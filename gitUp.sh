
read -p "Enter a comment : " comment
git add .
git commit -m "$comment"
git push -u origin master