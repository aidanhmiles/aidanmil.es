#/usr/bin/env bash

./gulp build --production

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# First time
# aws --profile aidanmil.es_s3 s3 cp $DIR/client/dist/ s3://aidanmil.es --recursive 

# Subsequent times
aws --profile aidanmil.es_s3 s3 sync $DIR/client/dist/ s3://aidanmil.es

# files=($DIR/client/dist/*)
# echo "${files[@]}"
