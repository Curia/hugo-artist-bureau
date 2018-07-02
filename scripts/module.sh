#!/usr/bin/env bash
# Generates module
dirname="src/modules/$1"

# Set params for template path and new name
scssTemplate="src/modules/module-template/template.scss"
scssName="${dirname}/$1.scss"
jsTemplate="src/modules/module-template/template.js"
jsName="${dirname}/$1.js"

# Make directories and copy template files
mkdir ${dirname}
cp  ${scssTemplate} ${scssName}
cp ${jsTemplate} ${jsName}
