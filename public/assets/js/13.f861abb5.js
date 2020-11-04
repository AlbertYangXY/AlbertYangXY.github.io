(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{367:function(a,e,t){"use strict";t.r(e);var c=t(0),s=Object(c.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"calico-笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico-笔记"}},[a._v("#")]),a._v(" Calico 笔记")]),a._v(" "),t("p",[a._v("2020/3/29 23:35:35")]),a._v(" "),t("h2",{attrs:{id:"配置bgp对等体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置bgp对等体"}},[a._v("#")]),a._v(" 配置BGP对等体")]),a._v(" "),t("p",[a._v("本文档介绍了可calicoctl用于管理BGP 的命令。它涵盖以下配置：")]),a._v(" "),t("ul",[t("li",[a._v("全局默认节点的AS号")]),a._v(" "),t("li",[a._v("完整的节点到节点网格")]),a._v(" "),t("li",[a._v("路线反射器功能")]),a._v(" "),t("li",[a._v("BGP对等体")]),a._v(" "),t("li",[a._v("全局BGP对等体")]),a._v(" "),t("li",[a._v("特定于节点的BGP对等体")])]),a._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("h3",{attrs:{id:"自治系统（as）编号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自治系统（as）编号"}},[a._v("#")]),a._v(" 自治系统（AS）编号")]),a._v(" "),t("p",[a._v("全局默认节点AS号是未明确指定Calico节点上BGP代理使用的AS号。当您的网络拓扑允许所有Calico节点使用相同的AS编号时，设置此值可简化配置。")]),a._v(" "),t("p",[a._v("确定Calico节点的AS编号：")]),a._v(" "),t("ul",[t("li",[a._v("根据 节点的 spec.bgp.asNumber定义（如果已定义）；")]),a._v(" "),t("li",[a._v("否则spec.asNumber，使用默认的BGPConfiguration资源的，如果已定义的话；")]),a._v(" "),t("li",[a._v("否则为64512（属于IANA范围，供私人使用）。")])]),a._v(" "),t("h3",{attrs:{id:"节点到节点网格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点到节点网格"}},[a._v("#")]),a._v(" 节点到节点网格")]),a._v(" "),t("p",[a._v("完整的节点到节点网格选项提供了一种在所有Calico节点之间自动配置对等的机制。启用后，每个Calico节点都会自动与网络中的每个其他Calico节点建立BGP对等体。默认情况下启用。")]),a._v(" "),t("p",[a._v("完整的节点到节点网格为在小规模部署（例如50个节点）中自动配置BGP网络提供了一种简单的机制-尽管没有严格限制此限制，并且Calico已在全网格拓扑中部署了100多个节点）。")]),a._v(" "),t("p",[a._v("对于大规模部署或需要更特定的BGP拓扑（例如，与ToR交换机对等）的部署，应禁用完整的节点到节点网格，并为Calico节点配置明确的BGP对等体。BGP对等体可以在您的Calico网络中配置为全局BGP对等体或每个节点的BGP对等体。")]),a._v(" "),t("h3",{attrs:{id:"路线反射器功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路线反射器功能"}},[a._v("#")]),a._v(" 路线反射器功能")]),a._v(" "),t("p",[a._v("可将Calico节点配置为充当其他Calico节点的路由反射器，同时为其自身的工作负载生成路由。通过设置节点的 启用此功能 spec.bgp.routeReflectorClusterID。通常，您还将添加标签以将该节点标识为路由反射器，以使配置来自其他Calico节点的对等互连变得容易。")]),a._v(" "),t("p",[a._v("Calico节点也有可能与集群外部的路由反射器对等。")]),a._v(" "),t("h3",{attrs:{id:"bgp对等体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bgp对等体"}},[a._v("#")]),a._v(" BGP对等体")]),a._v(" "),t("p",[a._v("Calico BGPPeer资源提供了多种方式来表示某些Calico节点集应与其他Calico节点或与IP标识的其他BGP发言人对等。除了完整的节点到节点网格之外，也可以使用这些配置，也可以替代这些配置。BGPPeer可以指定所有Calico节点都应该具有某些对等体，或者仅一个特定的Calico节点，或者其标签与指定的标签选择器匹配的Calico节点。要连接的对等方可以只是其IP指定的一个对等方，也可以是与给定标签选择器匹配的Calico节点集。")]),a._v(" "),t("h3",{attrs:{id:"全局bgp对等体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局bgp对等体"}},[a._v("#")]),a._v(" 全局BGP对等体")]),a._v(" "),t("p",[a._v("在这种情况下，BGPPeer的spec.node和spec.nodeSelector字段均为空。")]),a._v(" "),t("p",[a._v("全局BGP对等体是与网络中的每个Calico节点对等的BGP代理。全局对等点的典型用例可能是中型部署，其中所有Calico节点都在同一L2网络上，并且每个对等点都与同一路由反射器（或一组路由反射器）对等。")]),a._v(" "),t("h3",{attrs:{id:"特定于节点的bgp对等体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特定于节点的bgp对等体"}},[a._v("#")]),a._v(" 特定于节点的BGP对等体")]),a._v(" "),t("p",[a._v("BGPPeer的spec.node或spec.nodeSelector字段为非空时就是这种情况。")]),a._v(" "),t("p",[a._v("大规模地，不同的网络拓扑开始起作用。例如，在 参考资料中讨论的“ "),t("a",{attrs:{href:"https://docs.projectcalico.org/v3.4/reference/private-cloud/l3-interconnect-fabric#the-as-per-rack-model",target:"_blank",rel:"noopener noreferrer"}},[a._v("每个机架的AS"),t("OutboundLink")],1),a._v("”模型中，每个Calico节点都在机架顶部（ToR）交换机中与路由反射器对等。在这种情况下，BGP对等点是在每个节点的基础上配置的，或者是由给定标签选择器标识的一组节点 （即，这些是节点特定的对等点）配置的。在按机架的AS模型中，将为机架中的每个Calico节点配置特定于ToR路由反射器的对等节点。")]),a._v(" "),t("h3",{attrs:{id:"配置默认节点as号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置默认节点as号"}},[a._v("#")]),a._v(" 配置默认节点AS号")]),a._v(" "),t("p",[a._v("创建Calico节点时，您可以选择指定要用于该节点的AS编号。如果未指定AS号，则该节点将使用全局默认值。")]),a._v(" "),t("p",[a._v("请参阅示例以设置全局默认AS号。设置全局默认AS号。如果未配置任何值，则默认AS号为64512。")]),a._v(" "),t("p",[a._v("如果所有Calico节点都在同一AS中，但是您需要使用其他AS号（例如，因为您与边界路由器对等），则将默认AS号更改为所需的值就无需显式设置它基于每个Calico节点。对于在每个节点上显式设置AS号的更复杂的拓扑，将不使用默认值，因此不需要使用此命令。")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：在版本2.0.0之前，calicoctl并将calico/node全局默认AS号设置为64511。从2.0.0之前的版本更新部署以使用2.0.0+ calicoctl和calico/node容器映像不会影响以前设置的全局值。")])]),a._v(" "),t("h3",{attrs:{id:"禁用完整的节点到节点bgp网格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用完整的节点到节点bgp网格"}},[a._v("#")]),a._v(" 禁用完整的节点到节点BGP网格")]),a._v(" "),t("p",[a._v("如果要为Calico网络显式配置BGP拓扑，则可能希望禁用完整的节点到节点网格。有关 更改全局BGP设置的说明，请参见 示例nodeToNodeMeshEnabled。")]),a._v(" "),t("p",[a._v("如果您是从头开始构建网络的，不需要完整的节点到节点网格，我们建议在配置节点之前关闭网格。如果要将网络从全网状拓扑更新为其他拓扑（例如，开始使用路由反射器群集来增加缩放比例），请在禁用网状结构之前配置适当的对等点，以确保服务的连续性。")]),a._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("h3",{attrs:{id:"先决条件：calicoctl-已安装并配置。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先决条件：calicoctl-已安装并配置。"}},[a._v("#")]),a._v(" 先决条件：calicoctl "),t("a",{attrs:{href:"https://docs.projectcalico.org/v3.4/usage/calicoctl/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("已安装"),t("OutboundLink")],1),a._v("并"),t("a",{attrs:{href:"https://docs.projectcalico.org/v3.4/usage/calicoctl/configure/",target:"_blank",rel:"noopener noreferrer"}},[a._v("配置"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("p",[a._v("要关闭完整的BGP节点到节点网格或修改全局AS号，请完成以下步骤。")]),a._v(" "),t("p",[a._v("1.发出以下命令以确定您是否具有defaultBGP配置资源。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" calicoctl get bgpconfig default\n")])])]),t("p",[a._v("2.如果资源确实存在，请跳至步骤3。否则，请使用以下命令创建资源。发出命令之前，根据需要调整 nodeToNodeMeshEnabled和和asNumber线和值。有关这些设置的详细信息，请参考"),t("a",{attrs:{href:"https://docs.projectcalico.org/v3.4/reference/calicoctl/resources/bgpconfig",target:"_blank",rel:"noopener noreferrer"}},[a._v("BGP配置资源"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" cat << EOF | calicoctl create -f -\n apiVersion: projectcalico.org/v3\n kind: BGPConfiguration\n metadata:\n   name: default\n spec:\n   logSeverityScreen: Info\n   nodeToNodeMeshEnabled: false\n   asNumber: 63400    \n")])])]),t("p",[a._v("3.如果资源确实存在，请使用以下命令检索它并将其保存到文件中。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" calicoctl get bgpconfig default --export -o yaml > bgp.yaml\n")])])]),t("p",[a._v("4.在您喜欢的编辑器中打开bgpconfig设置文件，修改nodeToNodeMeshEnabled或asNumber根据需要，然后保存该文件。有关这些设置的详细信息，请参考BGP配置资源。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" vim bgp.yaml\n")])])]),t("p",[a._v("5.替换现有的BGP配置设置。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" calicoctl replace -f bgp.yaml\n")])])]),t("h3",{attrs:{id:"配置全局bgp对等体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置全局bgp对等体"}},[a._v("#")]),a._v(" 配置全局BGP对等体")]),a._v(" "),t("p",[a._v("如果您的网络拓扑包括将与 部署中的每个 Calico节点对等的BGP扬声器，则可以使用calicoctl资源管理命令在Calico节点上设置对等。我们将这些类型的对等方称为全局对等体，因为它们是在Calico中配置一次（全局）的，并且Calico将与这些对等体对等每个Calico节点。")]),a._v(" "),t("p",[a._v("全局BGP对等配置有用的两种情况是")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("在对等节点到完整的节点到节点网格中添加边界路由器时，或")])]),a._v(" "),t("li",[t("p",[a._v("配置使用一个或两个路由反射器提供中等规模的Calico网络输出功能。在后一种情况下，每个Calico节点都将与每个路由反射器对等，并且将禁用完整的节点到节点网格。")])])]),a._v(" "),t("h2",{attrs:{id:"示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("p",[a._v("要在IP地址192.20.30.40上添加具有AS号64567的全局BGP对等方，请在任何节点上运行以下命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("cat << EOF | calicoctl create -f -\napiVersion: projectcalico.org/v3\nkind: BGPPeer\nmetadata:\n  name: bgppeer-global-3040\nspec:\n  peerIP: 192.20.30.40\n  asNumber: 64567\nEOF\n")])])]),t("p",[a._v("要查看BGP对等方的当前列表，请运行以下命令。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl get bgpPeer\n")])])]),t("p",[a._v("它应该返回类似以下的内容。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("NAME  PEERIP NODE  ASN\nbgppeer-global-3040   192.20.30.40   (global)  64567\n")])])]),t("p",[a._v("要删除刚创建的全局BGP对等体，请运行以下命令。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl delete bgppeer bgppeer-global-3040\n")])])]),t("h2",{attrs:{id:"配置特定于节点的bgp对等体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置特定于节点的bgp对等体"}},[a._v("#")]),a._v(" 配置特定于节点的BGP对等体")]),a._v(" "),t("p",[a._v("如果您的网络拓扑要求每个Calico节点都具有特定calicoctl的对等体，则可以使用资源管理命令来设置特定于Calico节点的对等体。我们将它们称为特定于节点的对等体。")]),a._v(" "),t("p",[a._v("当BGP拓扑更加复杂并且在不同节点上需要不同的对等互连时，必须配置特定于节点的对等互连。例如， 参考资料中描述的每个机架模型的 AS 或 每个计算服务器模型的AS。")]),a._v(" "),t("h2",{attrs:{id:"示例-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("p",[a._v("要在IP地址aa：bb :: ff处添加AS号64514的BGP对等方，并与Calico节点“ node1”对等，请在任何节点上运行以下命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("cat << EOF | calicoctl create -f -\napiVersion: projectcalico.org/v3\nkind: BGPPeer\nmetadata:\n  name: bgppeer-node-aabbff\nspec:\n  peerIP: aa:bb::ff\n  node: node1\n  asNumber: 64514\nEOF\n")])])]),t("p",[a._v("要查看刚创建的BGP对等资源，请发出以下命令。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl get bgpPeer bgppeer-node-aabbff\n")])])]),t("p",[a._v("您应该在响应中看到新的BGP对等资源。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("NAME PEERIP  NODE\tASN\nbgppeer-node-aabbff  aa:bb::ff   node1   64514\n")])])]),t("p",[a._v("要删除BGP对等体，请运行以下命令。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl delete bgppeer bgppeer-node-aabbff\n")])])]),t("h2",{attrs:{id:"检查bgp对等体的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查bgp对等体的状态"}},[a._v("#")]),a._v(" 检查BGP对等体的状态")]),a._v(" "),t("p",[a._v("要显示特定节点的所有BGP对等状态，请使用 calicoctl node status命令。这将显示该节点的所有BGP对等体的状态-包括自动配置为整个节点到节点网格的一部分的对等体以及显式配置的全局对等体和特定于节点的对等体。")]),a._v(" "),t("p",[a._v("了解BGP对等状态是诊断为什么无法在网络上发布路由导致工作负载之间的连接不正确的第一步。")]),a._v(" "),t("h2",{attrs:{id:"示例-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("p",[a._v('要检查Calico节点上的对等状态"node1"，请SSH输入 "node1"并运行以下命令')]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl node status\n")])])]),t("p",[a._v("它应该返回类似以下的内容。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("Calico process is running.\n\nIPv4 BGP status\n+--------------+-------------------+-------+----------+-------------+\n| PEER ADDRESS | PEER TYPE \t\t   | STATE |  SINCE   |INFO \t\t|\n+--------------+-------------------+-------+----------+-------------+\n| 172.17.8.102 | node-to-node mesh | up\t   | 23:30:04 | Established |\n| 10.20.30.40  |   global  \t\t   | start | 16:28:38 |   Connect   |\n|  192.10.0.0  |   node specific   | start | 16:28:57 |   Connect   |\n+--------------+-------------------+-------+----------+-------------+\n\nIPv6 BGP status\n+--------------+-------------------+-------+----------+-------------+\n| PEER ADDRESS | PEER TYPE \t\t   | STATE |  SINCE   |INFO \t\t|\n+--------------+-------------------+-------+----------+-------------+\n| aa:bb::ff| node-to-node mesh \t   | up\t   | 16:17:26 | Established |\n+--------------+-------------------+-------+----------+-------------+\n")])])]),t("h2",{attrs:{id:"配置集群内路由反射器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置集群内路由反射器"}},[a._v("#")]),a._v(" 配置集群内路由反射器")]),a._v(" "),t("p",[a._v("对于较大的部署，您可以禁用完整的节点到节点网格，并配置一些节点以提供集群内路由反射。这样，每个节点仍将获得所有工作负载路由，但使用的BGP连接数量要少得多。")]),a._v(" "),t("p",[a._v("确定一个或多个Calico节点充当路由反射器。只要该节点保持正常运行，就只需要一个节点，但是我们建议选择两个或三个节点，以便在其中一些节点需要停机时间进行维护时继续正确的路由传播。")]),a._v(" "),t("p",[a._v("修改每个节点的节点资源，以：")]),a._v(" "),t("ul",[t("li",[a._v("将节点设置spec.bgp.routeReflectorClusterID为非空的群集ID，例如 224.0.0.1")]),a._v(" "),t("li",[a._v("添加表明该节点是路由反射器的标签。")])]),a._v(" "),t("p",[a._v("例如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl get node <node_name> --export -o yaml > node.yml\n")])])]),t("p",[a._v("编辑node.yml，使其包括：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("metadata:\n  labels:\n\ti-am-a-route-reflector: true\nspec:\n  bgp:\n\trouteReflectorClusterID: 224.0.0.1\n")])])]),t("p",[a._v("然后应用更新的YAML。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl apply -f node.yml\n")])])]),t("blockquote",[t("p",[a._v("注意：为了进行简单部署，所有路由反射器节点应具有相同的集群ID。")])]),a._v(" "),t("p",[a._v("配置BGPPeer资源，以告知其他Calico节点与路由反射器节点对等：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl apply -f - <<EOF\nkind: BGPPeer\napiVersion: projectcalico.org/v3\nmetadata:\n  name: peer-to-rrs\nspec:\n  nodeSelector: !has(i-am-a-route-reflector)\n  peerSelector: has(i-am-a-route-reflector)\nEOF\n")])])]),t("p",[a._v("配置BGPPeer资源，使路由反射器节点相互对等：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl apply -f - <<EOF\nkind: BGPPeer\napiVersion: projectcalico.org/v3\nmetadata:\n  name: rr-mesh\nspec:\n  nodeSelector: has(i-am-a-route-reflector)\n  peerSelector: has(i-am-a-route-reflector)\nEOF\n")])])]),t("blockquote",[t("p",[a._v("注意：在将所有工作负载路由传播到所有节点的意义上，路由反射器之间的完整网格使该示例可以自己完成。或者，路由反射器可能不直接彼此对等，而是通过某些上游设备（例如机架式路由器）对等。")])]),a._v(" "),t("h2",{attrs:{id:"更改ip池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改ip池"}},[a._v("#")]),a._v(" 更改IP池")]),a._v(" "),t("h3",{attrs:{id:"关于更改ip池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于更改ip池"}},[a._v("#")]),a._v(" 关于更改IP池")]),a._v(" "),t("p",[a._v("使用Calico IPAM时，将从选择的已配置IP池中为每个工作负载分配一个地址。出于以下原因之一，您可能想要修改正在运行的群集的IP池：")]),a._v(" "),t("ul",[t("li",[a._v("迁移到可以容纳更多工作负载的更大的CIDR。")]),a._v(" "),t("li",[a._v("移出意外使用的CIDR。")])]),a._v(" "),t("h3",{attrs:{id:"本页面的目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本页面的目的"}},[a._v("#")]),a._v(" 本页面的目的")]),a._v(" "),t("p",[a._v("提供有关如何从正在运行的群集上的一个IP池更改为另一个IP池的指导。")]),a._v(" "),t("h3",{attrs:{id:"先决条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[a._v("#")]),a._v(" 先决条件")]),a._v(" "),t("p",[a._v("Calico IPAM")]),a._v(" "),t("p",[a._v("本指南仅在使用Calico IPAM时适用。")]),a._v(" "),t("h3",{attrs:{id:"协调器支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协调器支持"}},[a._v("#")]),a._v(" 协调器支持")]),a._v(" "),t("p",[a._v("尽管Calico支持更改IP池，但并非所有协调器都支持。确保查阅您所使用的协调器的文档，以确保它支持更改工作负载CIDR。")]),a._v(" "),t("p",[a._v("例如，在Kubernetes中，以下所有三个参数必须等于或包含Calico IP池CIDR：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("kube-apiserver： --pod-network-cidr\nkube-proxy： --cluster-cidr\nkube-controller-manager： --cluster-cidr\n")])])]),t("p",[a._v("OpenShift不支持更改Pod网络CIDR（根据其在osm_cluster_network_cidr配置字段上的文档）。")]),a._v(" "),t("h3",{attrs:{id:"应用程序可用性影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用程序可用性影响"}},[a._v("#")]),a._v(" 应用程序可用性影响")]),a._v(" "),t("p",[a._v("此过程将需要重新创建所有Calico网络连接的工作负载，这将对应用程序的可用性产生一定的影响。")]),a._v(" "),t("h3",{attrs:{id:"不遵循此迁移过程而删除ip池的后果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不遵循此迁移过程而删除ip池的后果"}},[a._v("#")]),a._v(" 不遵循此迁移过程而删除IP池的后果")]),a._v(" "),t("p",[a._v("如果不遵循此迁移过程而删除IP池，则可能导致任何运行中的工作负载（具有该IP池中的地址）的网络连接中断。即：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("如果在IP池上启用了IP-in-IP，则将不再封装这些工作负载的流量。\n如果在IP池上启用了nat-outgoing，则这些工作负载将不再经过NAT流量。\n如果使用Calico BGP路由，则将不再聚合到Pod的路由。\n")])])]),t("h2",{attrs:{id:"更改ip池-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改ip池-2"}},[a._v("#")]),a._v(" 更改IP池")]),a._v(" "),t("h3",{attrs:{id:"基本过程如下："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本过程如下："}},[a._v("#")]),a._v(" 基本过程如下：")]),a._v(" "),t("ol",[t("li",[a._v("添加一个新的IP池。")]),a._v(" "),t("li",[a._v("禁用旧的IP池。这样可以防止从旧的IP池中分配新的IPAM，而不会影响现有工作负载的联网。")]),a._v(" "),t("li",[a._v("重新创建从旧IP池分配了地址的所有现有工作负载。")]),a._v(" "),t("li",[a._v("删除旧的IP池。")])]),a._v(" "),t("h3",{attrs:{id:"示例：kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例：kubernetes"}},[a._v("#")]),a._v(" 示例：Kubernetes")]),a._v(" "),t("p",[a._v("在此示例中，我们使用kubeadm创建了一个集群。我们希望Pod在范围内使用IP， 10.0.0.0/16因此我们--pod-network-cidr=10.0.0.0/16在运行时进行设置kubeadm init。但是，我们安装Calico时未将默认IP池设置为匹配。运行calicoctl get ippool -o wide显示Calico创建了其默认IP池192.168.0.0/16：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("NAME  \t\t\t\t\tCIDR \t\t\tNAT\t\tIPIPMODE   DISABLED\ndefault-ipv4-ippool   192.168.0.0/16   true   \tAlways \t\tfalse\n")])])]),t("p",[a._v("根据的输出calicoctl get wep --all-namespaces，我们看到kube-dns已经分配了一个错误范围内的地址：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("NAMESPACE \t\t\t\tWORKLOAD   \t\t\tNODE  \t\tNETWORKS\t\t\tINTERFACE\nkube-system   kube-dns-6f4fd4bdf-8q7zp   vagrant   192.168.52.130/32   cali800a63073ed\n")])])]),t("p",[a._v("让我们开始吧。")]),a._v(" "),t("p",[a._v("1.添加一个新的IP池：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl create -f -<<EOF\napiVersion: projectcalico.org/v3\nkind: IPPool\nmetadata:\n  name: new-pool\nspec:\n  cidr: 10.0.0.0/16\n  ipipMode: Always\n  natOutgoing: true\nEOF\n")])])]),t("p",[a._v("现在，我们应该有两个启用的IP池，运行时可以看到它们calicoctl get ippool -o wide：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("NAME  \t\t\t\t\tCIDR \t\t\tNAT\t\tIPIPMODE   DISABLED\ndefault-ipv4-ippool   192.168.0.0/16   \ttrue   \tAlways \t\tfalse\nnew-pool  \t\t\t  10.0.0.0/16  \t\ttrue   \tAlways \t\tfalse\n")])])]),t("p",[a._v("2.禁用旧的IP池。")]),a._v(" "),t("p",[a._v("首先将IP池定义保存到磁盘：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl get ippool -o yaml > pool.yaml\n")])])]),t("p",[a._v("pool.yaml 应该看起来像这样：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("apiVersion: projectcalico.org/v3\nitems:\n- apiVersion: projectcalico.org/v3\n  kind: IPPool\n  metadata:\n\tname: default-ipv4-ippool\n  spec:\n\tcidr: 192.0.0.0/16\n\tipipMode: Always\n\tnatOutgoing: true\n- apiVersion: projectcalico.org/v3\n  kind: IPPool\n  metadata:\n\tname: new-pool\n  spec:\n\tcidr: 10.0.0.0/16\n\tipipMode: Always\n\tnatOutgoing: true\n")])])]),t("blockquote",[t("p",[a._v("注意：已编辑一些额外的特定于群集的信息以提高可读性。")])]),a._v(" "),t("p",[a._v("编辑文件，将其添加disabled: true到default-ipv4-ippoolIP池中：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("apiVersion: projectcalico.org/v3\nkind: IPPool\nmetadata:\n  name: default-ipv4-ippool\nspec:\n  cidr: 192.0.0.0/16\n  ipipMode: Always\n  natOutgoing: true\n  disabled: true\n")])])]),t("p",[a._v("应用更改：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl apply -f pool.yaml\n")])])]),t("p",[a._v("我们应该看到更改反映在calicoctl get ippool -o wide：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("NAME  \t\t\t\t\tCIDR \t\t\tNAT\t\tIPIPMODE   DISABLED\ndefault-ipv4-ippool   192.168.0.0/16    true   \tAlways \t\ttrue\nnew-pool  \t\t\t  10.0.0.0/16  \t\ttrue   \tAlways \t\tfalse\n")])])]),t("p",[a._v("3.使用禁用池中的IP重新创建所有现有工作负载。在此示例中，kube-dns是Calico唯一联网的工作负载：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("kubectl delete pod -n kube-system kube-dns-6f4fd4bdf-8q7zp\n")])])]),t("p",[a._v("通过运行calicoctl get wep --all-namespaces以下命令，检查新工作负载现在在新IP池中是否有地址：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("NAMESPACE \t\t\tWORKLOAD   \t\t\t NODE  \t\tNETWORK\t\t\tSINTERFACE\nkube-system   kube-dns-6f4fd4bdf-8q7zp   vagrant   10.0.24.8/32   cali800a63073ed\n")])])]),t("p",[a._v("删除旧的IP池：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("calicoctl delete pool default-ipv4-ippool\n")])])]),t("h2",{attrs:{id:"下一步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[a._v("#")]),a._v(" 下一步")]),a._v(" "),t("p",[a._v("有关IP池资源的结构的更多信息，请参见 "),t("a",{attrs:{href:"https://docs.projectcalico.org/v3.4/reference/calicoctl/resources/ippool",target:"_blank",rel:"noopener noreferrer"}},[a._v("IP池参考"),t("OutboundLink")],1),a._v("。")])])}),[],!1,null,null,null);e.default=s.exports}}]);