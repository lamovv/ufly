#!/bin/sh

while getopts "npm:v:" opt
do 
  case $opt in
    p)
    push=1
    ;;
    n)
    npm=1
    ;;
    m)
    cimsg=$OPTARG
    ;;
    v)
    version=$OPTARG
  esac
done

# git
if [ "$push" ]
then
  git add .
  if [ -z "$cimsg" ]
  then
    read -t 30 -p "请为此次变更输入commit message：" cimsg
  fi
  git commit -m "${cimsg:=no cimsg}"
  git push
fi

# npm
if [ "$npm" ]
then
  # patch|minor|major
  npm version ${version:=patch}
  npm publish --registry=https://registry.npmjs.org
fi