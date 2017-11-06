#/usr/bin/env bash

./gulp build --production


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

rm -r $DIR/client/dist/.well-known
cp -r .well-known $DIR/client/dist/
aws --profile website s3 sync $DIR/client/dist/ s3://aidanmil.es --delete


# files=($DIR/client/dist/*)
# echo "${files[@]}"
