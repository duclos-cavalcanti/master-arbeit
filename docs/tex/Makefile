ifeq (, $(shell which docker))
$(error docker not found)
endif

PWD := $(shell pwd)
UID := $(shell id -u)
GID := $(shell id -g)

# https://hub.docker.com/r/blang/latex
DOCKER := blang/latex

.PHONY: pdf get exit clean
all: pdf

pull: 
	docker pull blang/latex

pdf: 
	docker exec -i ${NAME} npx playwright install
	docker exec -i ${NAME} npx slidev export --timeout 2m --output slides.pdf

get: 
	@wget https://raw.githubusercontent.com/blang/latex-docker/master/latexdockercmd.sh

exit:
	$(error Exiting Makefile)

clean:
	@echo clean

