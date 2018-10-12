#!/usr/bin/python

from urllib2 import Request, urlopen
import os, sys
import ast
import json

token = "ef0c3eab-2891-411e-a68c-d4e142cdd8eb"

headers = {
  'Authorization': 'Bearer ' + token
}

request = Request('https://investigate.api.umbrella.com/domains/categories/', headers=headers)

cat = urlopen(request).read()

cat = cat[1:-1]
cat = cat.translate(None, '\"')
cat = cat.replace(':', ' : ')
cat = cat.replace(',', '<br>')
print(cat)

sys.stdout.flush()
