# Variables
IMAGE_NAME = boilerplate-vite-next-tailwind
CONTAINER_NAME = boilerplate-vite-next-tailwind
PORT = 3000

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run the container in development mode
dev:
	docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	docker run --rm -it \
		-p $(PORT):$(PORT) \
		--name $(CONTAINER_NAME) \
		-v $(PWD)/src:/app/src \
		-v $(PWD)/public:/app/public \
		-e NODE_ENV=development \
		$(IMAGE_NAME)

# Run the container in production mode
prod:
	docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	docker run -d \
		-p $(PORT):$(PORT) \
		--name $(CONTAINER_NAME) \
		-e NODE_ENV=production \
		$(IMAGE_NAME)

# Stop the running container
stop:
	docker stop $(CONTAINER_NAME) 2>/dev/null || true

# Remove the container
rm:
	docker rm $(CONTAINER_NAME) 2>/dev/null || true

# Stop and remove the container
clean: stop rm

# Show container logs
logs:
	docker logs -f $(CONTAINER_NAME)

# Enter the container shell
shell:
	docker exec -it $(CONTAINER_NAME) /bin/sh

# Build and run in production mode
up: build prod

# Stop, remove, rebuild and run in production mode
restart: clean build prod

.PHONY: build dev prod stop rm clean logs shell up restart
