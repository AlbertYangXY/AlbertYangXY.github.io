(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(e,s,t){"use strict";t.r(s);var r=t(0),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kubernetes-dashboard配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-dashboard配置"}},[e._v("#")]),e._v(" kubernetes DashBoard配置")]),e._v(" "),t("p",[e._v("2020/3/30 11:06:55")]),e._v(" "),t("h2",{attrs:{id:"用户模拟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户模拟"}},[e._v("#")]),e._v(" 用户模拟")]),e._v(" "),t("p",[e._v("模拟使用反向代理将用户的标识信息（用户名，组和额外作用域）作为对API服务器的每个请求中的标头注入。如果您的反向代理会将这些标头注入请求中，则仪表板可以将这些标头传递给API服务器。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/NZkTjwj.png",alt:""}})]),e._v(" "),t("p",[e._v("在无法使用用户令牌的情况下，例如云托管的Kubernetes服务，模拟功能非常有用。要使用模拟，反向代理必须：")]),e._v(" "),t("ol",[t("li",[e._v("有一个具有RBAC权限的Kubernetes服务帐户来模拟其他用户")]),e._v(" "),t("li",[e._v("生成Impersonate-User带有标识用户的唯一名称的标头")]),e._v(" "),t("li",[e._v("可选用Impersonate-Group模拟用户的组数据生成标题")]),e._v(" "),t("li",[e._v("可选生成Impersonate-Extra带有其他授权数据的标头")])]),e._v(" "),t("p",[e._v("仅当反向代理为Authorization标头提供有效的服务帐户时，模拟才起作用。它不能与任何其他对仪表板进行身份验证的方法一起使用。")]),e._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("h3",{attrs:{id:"推荐设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐设置"}},[e._v("#")]),e._v(" 推荐设置")]),e._v(" "),t("p",[e._v("要直接（不带kubectl proxy）直接访问Dashboard，应使用有效证书来建立安全的HTTPS连接。可以使用公共信任的证书颁发机构（如Let's Encrypt）生成它们，可选地，Cert-Manager可以自动颁发和自动更新它们。使用它们替换从仪表板自动生成的证书。")]),e._v(" "),t("p",[e._v("默认情况下，会生成自签名证书并将其存储在内存中。如果您想使用自定义证书，请执行以下步骤，否则，直接跳到“仪表板”部署部分。")]),e._v(" "),t("p",[e._v("自定义证书必须存储在kubernetes-dashboard-certs与Kubernetes仪表板相同名称空间中的秘密中。假设您已将tls.crt和tls.key文件存储在$HOME/certs目录下，则应使用以下文件的内容创建密钥：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("kubectl create secret generic kubernetes-dashboard-certs --from-file=$HOME/certs -n kubernetes-dashboard\n")])])]),t("p",[e._v("对于仪表盘获取证书，则必须通过参数--tls-cert-file=/tls.crt和--tls-key-file=/tls.key容器中。您可以一次编辑YAML定义并部署仪表板：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("kubectl create --edit -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-rc6/aio/deploy/recommended.yaml\n")])])]),t("p",[e._v("在“部署”部分下，将参数添加到pod定义中，它应如下所示：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("containers:\n- args:\n  - --tls-cert-file=/tls.crt\n  - --tls-key-file=/tls.key\n")])])]),t("p",[e._v("--auto-generate-certificates 可以保留在原处，并用作备用。")]),e._v(" "),t("h3",{attrs:{id:"替代设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#替代设置"}},[e._v("#")]),e._v(" 替代设置")]),e._v(" "),t("p",[e._v("此设置不是完全安全。不使用证书，并且仪表板仅通过HTTP公开。在此设置中，只能使用授权标头功能来确保访问控制。")]),e._v(" "),t("p",[e._v("要部署仪表板，请执行以下命令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-rc6/aio/deploy/alternative.yaml\n")])])]),t("h2",{attrs:{id:"证书管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#证书管理"}},[e._v("#")]),e._v(" 证书管理")]),e._v(" "),t("p",[e._v("简要介绍了如何获取证书，该证书可用于在仪表板中启用HTTPS。为此，需要两个步骤：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("生成证书：")]),e._v(" "),t("p",[e._v("1.1 公众信任的CA。")]),e._v(" "),t("p",[e._v("1.2 自签名证书。")])]),e._v(" "),t("li",[t("p",[e._v("将它们传递到仪表板：")]),e._v(" "),t("p",[e._v("2.1 如果您遵循推荐的设置来部署仪表板，只需生成证书并遵循它即可。")]),e._v(" "),t("p",[e._v("2.2 在任何其他情况下，您都需要更改仪表板的YAML部署文件，并将--tls-key-file和--tls-cert-file标志传递给仪表板。有关如何将它们安装到吊舱中的更多信息，请参见此处。")])])]),e._v(" "),t("h2",{attrs:{id:"公众信任的证书颁发机构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众信任的证书颁发机构"}},[e._v("#")]),e._v(" 公众信任的证书颁发机构")]),e._v(" "),t("p",[e._v("有许多公共和免费证书提供者可供选择。最好的受信任证书提供者之一是“"),t("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),t("OutboundLink")],1),e._v("”。您可以在"),t("a",{attrs:{href:"https://letsencrypt.org/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("找到有关如何生成由其受信任的CA签名的证书所需的所有知识。")]),e._v(" "),t("h2",{attrs:{id:"自签名证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自签名证书"}},[e._v("#")]),e._v(" 自签名证书")]),e._v(" "),t("p",[e._v("如果您想自己生成证书，则需要像OpenSSL这样的库来帮助您做到这一点。")]),e._v(" "),t("h3",{attrs:{id:"生成私钥和证书签名请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成私钥和证书签名请求"}},[e._v("#")]),e._v(" 生成私钥和证书签名请求")]),e._v(" "),t("p",[e._v("创建SSL证书需要私钥和证书签名请求。这些可以通过一些简单的命令生成。当openssl req命令要求输入“challenge password”时，只需按回车键，将密码保留为空。证书颁发机构使用此密码来验证证书所有者，以撤消其证书。由于这是自签名证书，因此无法通过CRL（证书吊销列表）吊销它。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("openssl genrsa -des3 -passout pass:over4chars -out dashboard.pass.key 2048\n...\nopenssl rsa -passin pass:over4chars -in dashboard.pass.key -out dashboard.key\n# Writing RSA key\nrm dashboard.pass.key\nopenssl req -new -key dashboard.key -out dashboard.csr\n...\nCountry Name (2 letter code) [AU]: US\n...\nA challenge password []:\n...\n")])])]),t("h3",{attrs:{id:"生成ssl证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成ssl证书"}},[e._v("#")]),e._v(" 生成SSL证书")]),e._v(" "),t("p",[e._v("自签名SSL证书是从dashboard.key私钥和dashboard.csr文件生成的。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("openssl x509 -req -sha256 -days 365 -in dashboard.csr -signkey dashboard.key -out dashboard.crt\n")])])]),t("p",[e._v("该dashboard.crt文件是您适合与仪表板一起使用的证书以及dashboard.key私钥。")]),e._v(" "),t("h2",{attrs:{id:"访问dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问dashboard"}},[e._v("#")]),e._v(" 访问dashboard")]),e._v(" "),t("h3",{attrs:{id:"访问仪表板在1-7-x及更高版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问仪表板在1-7-x及更高版本"}},[e._v("#")]),e._v(" 访问仪表板在1.7.x及更高版本")]),e._v(" "),t("p",[t("strong",[e._v("重要信息：仅当您使用“ 推荐的设置”，“ 入门指南”来部署仪表板或手动提供的--tls-key-file和--tls-cert-file标志时，HTTPS端点才可用")])]),e._v(" "),t("blockquote",[t("p",[e._v("注意：仪表板不应通过HTTP公开。对于通过HTTP访问的域，将无法登录。单击登录页面上的“登录”按钮后，将不会进行任何操作。")])]),e._v(" "),t("h3",{attrs:{id:"kubectl-proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-proxy"}},[e._v("#")]),e._v(" kubectl proxy")]),e._v(" "),t("p",[e._v("kubectl proxy在您的机器和Kubernetes API服务器之间创建代理服务器。默认情况下，只能在本地（从启动它的计算机上）访问它。")]),e._v(" "),t("p",[e._v("首先，让我们检查是否kubectl已正确配置并可以访问群集。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("kubectl cluster-info \nKubernetes master is running at https://10.142.96.136:6443\nCoreDNS is running at https://10.142.96.136:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\nkubernetes-dashboard is running at https://10.142.96.136:6443/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy\nMetrics-server is running at https://10.142.96.136:6443/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")])])]),t("p",[e._v("启动本地代理服务器。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("$ kubectl proxy\nStarting to serve on 127.0.0.1:8001\n")])])]),t("p",[e._v("启动代理服务器后，您应该能够从浏览器访问仪表板。")]),e._v(" "),t("p",[e._v("要访问仪表板的HTTPS端点，请转到： http://localhost:8001/api/v1/namespaces/kubernetes-system/services/https:kubernetes-dashboard:/proxy/")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：仪表板不应使用kubectl proxy命令公开，因为它仅允许HTTP连接。对于localhost和以外的域127.0.0.1，将无法登录。单击Sign in登录页面上的按钮后，将不会发生任何事情。")])]),e._v(" "),t("h3",{attrs:{id:"kubectl-port-forward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-port-forward"}},[e._v("#")]),e._v(" kubectl port-forward")]),e._v(" "),t("p",[e._v("替代kubectl proxy，您可以使用kubectl port-forward更加简单的URL来访问仪表板kubectl proxy。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("$ kubectl port-forward -n kubernetes-system service/kubernetes-dashboard 10443:443\nForwarding from 127.0.0.1:10443 -> 8443\n")])])]),t("h3",{attrs:{id:"nodeport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodeport"}},[e._v("#")]),e._v(" NodePort")]),e._v(" "),t("p",[e._v("仅在单节点设置中的开发环境中才建议使用这种访​​问Dashboard的方式。")]),e._v(" "),t("p",[e._v("编辑kubernetes-dashboard服务。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("$ kubectl -n kubernetes-system edit service kubernetes-dashboard\n")])])]),t("p",[e._v("您应该看到yaml服务的表示形式。更改type: ClusterIP为type: NodePort并保存文件。如果已经更改，请转到下一步。\n接下来，我们需要检查显示板所在的端口。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("$ kubectl -n kubernetes-system get service kubernetes-dashboard\nNAME   \t\t\t\t\tTYPE   \t\tCLUSTER-IP   EXTERNAL-IP   PORT(S)\t   AGE\nkubernetes-dashboard   NodePort   172.20.13.72   <nodes>   443:31707/TCP   21h\n")])])]),t("p",[e._v("仪表板已暴露在端口上31707 (HTTPS)。现在，你可以从你的浏览器访问：https://"),t("master-ip",[e._v(":31707。master-ip可以通过执行找到kubectl cluster-info。假设您的集群直接在执行这些命令的机器上运行，通常它是您机器的127.0.0.1或IP。")])],1),e._v(" "),t("p",[e._v("如果您尝试NodePort在多节点群集上使用Dashboard ，则必须找出运行Dashboard的节点的IP才能访问它。而不是访问，https://"),t("master-ip",[e._v(":"),t("nodePort",[e._v("您应该访问https://"),t("node-ip",[e._v(":"),t("nodePort",[e._v("。")])],1)],1)],1)],1),e._v(" "),t("h3",{attrs:{id:"api-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-server"}},[e._v("#")]),e._v(" API Server")]),e._v(" "),t("p",[e._v("如果Kubernetes API服务器是公开的并且可以从外部访问，则可以直接在以下位置访问仪表板： https://"),t("master-ip",[e._v(":"),t("apiserver-port",[e._v("/api/v1/namespaces/kubernetes-system/services/https:kubernetes-dashboard:/proxy/")])],1)],1),e._v(" "),t("blockquote",[t("p",[e._v("注意：仅当您选择在浏览器中安装用户证书时，才可以使用这种方式访问​​Dashboard。在示例中，可以使用kubeconfig文件用于联系API服务器的证书。")])]),e._v(" "),t("h3",{attrs:{id:"ingress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ingress"}},[e._v("#")]),e._v(" Ingress")]),e._v(" "),t("p",[e._v("仪表板也可以使用Ingress资源公开。有关更多信息，请访问：https : //kubernetes.io/docs/concepts/services-networking/ingress。")])])}),[],!1,null,null,null);s.default=a.exports}}]);