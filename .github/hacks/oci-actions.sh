#!/usr/bin/env bash

# This script login, package and push a chart to an OCI registry

set -euo pipefail

OCI_REGISTRY=registry-1.docker.io
OCI_NAMESPACE=cloudnativerioja
CHART_PATH=charts
CHART_NAME=official-website

# function modify tag in values.yaml
function modify_tag() {
  echo "Modifying tag..."
  sed -i "s/tag: .*/tag: ${TAG}/g" ${CHART_PATH}/${CHART_NAME}/values.yaml
}

# function login with helm to an OCI registry
function login() {
  echo "Logging in to OCI registry..."
  echo "${DOCKERHUB_TOKEN}" | helm registry login ${OCI_REGISTRY} -u ${DOCKERHUB_USERNAME} --password-stdin
}

# function package a chart
function package() {
  echo "Packaging chart..."
  helm package ${CHART_PATH}/${CHART_NAME} --version ${TAG}
}

# function push a chart to an OCI registry
function push() {
    echo "Pushing chart to OCI registry..."
    helm push ./${CHART_NAME}/${CHART_NAME}-${TAG}.tgz oci://${OCI_REGISTRY}/${OCI_NAMESPACE}
}

function main() {
  modify_tag
  login
  package
  push
}

main