mkdir -p $HOME/.kube
cat kubeconfig > $HOME/.kube/config
export KUBECONFIG=$HOME/.kube/config
mkdir ctd
cp $KUBECONFIG ctd/kubeconfig
kubectl config view
kubectl get nodes
kubectl delete deployment nodejsmicro-k8s-deployment --ignore-not-found=true
kubectl apply -f nodejs_micro.yaml
kubectl get services nodejsmicro-k8s-service
kubectl get pods
kubectl describe pods
