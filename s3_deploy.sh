#/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

aws --profile aidanmil.es_s3 s3 cp $DIR/client/dist/ s3://aidanmil.es --recursive 

# files=($DIR/client/dist/*)
# echo "${files[@]}"
