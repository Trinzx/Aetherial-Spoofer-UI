import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

Rectangle {
    Layout.fillWidth: true
    Layout.preferredHeight: 300
    radius: 20
    color: Qt.rgba(1, 1, 1, 0.03)
    border.color: Qt.rgba(1, 1, 1, 0.05)
    
    // Abstracted Card for catalog items
    property string name: "Product Name"
    property string status: "ready"
    property string version: "v1.0"
    
    ColumnLayout {
        anchors.fill: parent
        spacing: 0
        
        Rectangle {
            Layout.fillWidth: true; Layout.preferredHeight: 180
            Layout.margins: 2
            radius: 18; color: "#111"
            clip: true
            Image { anchors.fill: parent; fillMode: Image.PreserveAspectCrop; source: "thumb.jpg"; opacity: 0.8 }
        }
        
        ColumnLayout {
            Layout.margins: 20
            spacing: 5
            Text { text: root.name; color: "white"; font.bold: true; font.pixelSize: 18 }
            Text { text: root.version; color: Theme.textColorMuted; font.pixelSize: 12 }
        }
        
        Item { Layout.fillHeight: true }
    }
}
