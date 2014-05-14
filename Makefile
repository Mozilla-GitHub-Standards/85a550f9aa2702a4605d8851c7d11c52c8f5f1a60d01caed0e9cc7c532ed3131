# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

NODE_LOCAL_BIN=./node_modules/.bin

install:
	@npm install

.PHONY: runserver
runserver:
	@env PORT=5000 node index.js
