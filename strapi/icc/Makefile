all: | generate start

tag = strapi/icc

generate:
	-docker rm -f $(docker ps | grep $(tag) | awk '{print $1}')
	-docker rmi $(docker images | grep $(tag))
	docker build -t $(tag) .

start:
	docker run -p 1337:1337 $(tag) 

