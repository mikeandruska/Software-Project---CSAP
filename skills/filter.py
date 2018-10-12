#!/usr/bin/python

from urllib2 import Request, urlopen
import os, sys
import ast
import json

token = "ef0c3eab-2891-411e-a68c-d4e142cdd8eb"

headers = {
  'Authorization': 'Bearer ' + token
}

request = Request('https://investigate.api.umbrella.com//topmillion?limit=1000', headers=headers)
response_body = urlopen(request).read()

resp = response_body.split(",")
resp[0] = resp[0].translate(None, '[')
resp[len(resp) - 1] = resp[len(resp) - 1].translate(None, ']')

resp = [url.translate(None, '\"') for url in resp]

# domains/categorization (POST)

headers = {
  'Authorization': 'Bearer ' + token
}

cat = Request('https://investigate.api.opendns.com/domains/categorization', data=response_body, headers=headers)
cat = urlopen(cat).read()

d = ast.literal_eval(cat)
response = []
for key, value in d.iteritems():
	if sys.argv[1] in value['content_categories']:
		response.append(key)

response = ' '.join(response)
response = response.replace(' ', '<br>')
print(response)

sys.stdout.flush()
