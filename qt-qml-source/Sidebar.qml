import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

Rectangle {
    id: root
    color: "#0F0F10"
    
    property string activeTab: "dashboard"
    signal tabChanged(string tab)

    ColumnLayout {
        anchors.fill: parent
        spacing: 0

        // Header
        Item {
            Layout.preferredHeight: 80
            Layout.fillWidth: true
            RowLayout {
                anchors.centerIn: parent
                spacing: 12
                Rectangle { width: 32; height: 32; radius: 8; color: Theme.primaryRed }
                Text { text: "NOVA"; color: "white"; font.bold: true; font.pixelSize: 18 }
            }
        }

        // Navigation
        ColumnLayout {
            Layout.fillWidth: true
            Layout.fillHeight: true
            Layout.margins: 10
            spacing: 5

            Repeater {
                model: [
                    { id: "dashboard", label: "Dashboard" },
                    { id: "products", label: "Products" },
                    { id: "library", label: "Library" },
                    { id: "account", label: "Account" }
                ]
                
                delegate: ItemDelegate {
                    Layout.fillWidth: true
                    Layout.preferredHeight: 50
                    
                    onClicked: root.tabChanged(modelData.id)
                    
                    background: Rectangle {
                        color: root.activeTab === modelData.id ? Qt.rgba(225/255, 29/255, 72/255, 0.1) : "transparent"
                        radius: 10
                        
                        Rectangle {
                            anchors.left: parent.left
                            anchors.verticalCenter: parent.verticalCenter
                            width: 3; height: 20
                            color: Theme.primaryRed
                            visible: root.activeTab === modelData.id
                        }
                    }
                    
                    contentItem: Text {
                        text: modelData.label
                        color: root.activeTab === modelData.id ? "white" : Theme.textColorSecondary
                        font.bold: root.activeTab === modelData.id
                        verticalAlignment: Text.AlignVCenter
                        leftPadding: 15
                    }
                }
            }
            
            Item { Layout.fillHeight: true }
        }
    }
}
