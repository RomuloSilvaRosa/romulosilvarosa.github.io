.PHONY: dev build lint format check clean

dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

format:
	./node_modules/.bin/biome format --write .

check:
	./node_modules/.bin/biome check .

clean:
	rm -rf .next out
