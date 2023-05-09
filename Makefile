.PHONY: deps dev
.SILENT: deps dev

deps:
	@echo "Instalando dependencias..."
	@yarn install

dev: deps
	@echo "Corriendo el servidor de desarrollo..."
	@yarn dev

