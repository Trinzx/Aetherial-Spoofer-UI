import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

Rectangle {
    id: root
    width: 400; height: parent.height
    anchors.right: parent.right
    color: "#0F0F10"
    border.color: Qt.rgba(1, 1, 1, 0.05)
    
    // Slide-in animation normally here
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 40
        spacing: 20
        
        Image { 
            Layout.fillWidth: true
            Layout.preferredHeight: 250
            fillMode: Image.PreserveAspectCrop
            source: "detail_hero.jpg"
        }
        
        Text { text: "Details"; color: "white"; font.pixelSize: 22; font.bold: true }
        Text { 
            text: "Full changelog and technical documentation for this module."; 
            color: Theme.textColorSecondary
            Layout.fillWidth: true
            wrapMode: Text.WordWrap
        }
        
        Item { Layout.fillHeight: true }
        
        Button { Layout.fillWidth: true; text: "Install Engine"; }
    }
}
