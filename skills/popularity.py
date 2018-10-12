#!/usr/bin/python

from urllib2 import Request, urlopen
import os, sys
import ast
import json
import re

token = "ef0c3eab-2891-411e-a68c-d4e142cdd8eb"

headers = {
  'Authorization': 'Bearer ' + token
}

request = Request('https://investigate.api.umbrella.com/security/name/' + sys.argv[1], headers=headers)
response = urlopen(request).read()
match = re.search('popularity\D*\d*\.\d*', response).group(0)
out = re.search('\d*\.\d*', match).group(0)

print(out)
sys.stdout.flush()
