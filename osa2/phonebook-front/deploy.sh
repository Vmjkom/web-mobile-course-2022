#!/bin/sh
npm run build
rm -rf ../../../phonebook-full/build
cp -r build ../../../phonebook-full/
