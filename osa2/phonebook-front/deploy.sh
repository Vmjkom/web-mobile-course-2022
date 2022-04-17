#!/bin/sh
npm run build
rm -rf ../../osa3/phonebook-full/build
cp -r build ../../osa3/phonebook-full/
