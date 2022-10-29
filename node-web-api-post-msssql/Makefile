up:
	docker-compose up -d

down:
	docker-compose down

acr:
	az acr login --name stgtsmartreceive

build:
	docker buildx build \
  --platform linux/amd64 \
  --push \
  -t stgtsmartreceive.azurecr.io/sritrangsmartreceive:latest \
  .

build-prod:
	docker buildx build \
  --platform linux/amd64 \
  --push \
  -t staregistry.sritranggroup.com/smart-receive/sritrang-smart-receive-backend:v1.4.9 \
  .

kube-dep:
	KUBECONFIG=kubeconfig.yml kubectl apply -f 'deployment-backend.yml'

kube-con:
	KUBECONFIG=kubeconfig.yml kubectl apply -f 'configmap-backend.yml'

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d

fs-remote:
	git remote add origin https://chokchaile@dev.azure.com/chokchaile/STGT%20-%20Smart%20Receive/_git/STGT%20-%20Smart%20Receive%20API
	git push -u origin --all

setremote-fs:
	git remote set-url origin https://chokchaile@dev.azure.com/chokchaile/STGT%20-%20Smart%20Receive/_git/STGT%20-%20Smart%20Receive%20API

setremote-st:
	git remote set-url origin https://stagitlab.sritranggroup.com/smart-receive/sritrang-smart-receive-backend.git