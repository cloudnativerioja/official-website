.PHONY: deps dev
.SILENT: deps dev

deps:
	@echo "Instalando dependencias..."
	@yarn install

dev: deps
	@echo "Corriendo el servidor de desarrollo..."
	@yarn dev

build-image:
	@echo "Construyendo imagen de docker..."
	@docker build -t cloudnativerioja .

run-image:
	@echo "Corriendo imagen de docker..."
	@echo "Accede a http://localhost:8080"
	@docker run -p 8080:80 cloudnativerioja