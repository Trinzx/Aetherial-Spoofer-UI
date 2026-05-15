import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

Rectangle {
    anchors.fill: parent
    color: "transparent"
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 40
        spacing: 20
        
        Text {
            text: "YOUR ACCOUNT"
            font.pixelSize: 24
            font.bold: true
            color: "white"
        }
        
        Rectangle {
            Layout.fillWidth: true
            Layout.preferredHeight: 200
            radius: 20
            color: Qt.rgba(1, 1, 1, 0.03)
            border.color: Qt.rgba(1, 1, 1, 0.05)
            
            RowLayout {
                anchors.fill: parent
                anchors.margins: 30
                spacing: 30
                
                Rectangle {
                    width: 100; height: 100; radius: 50
                    color: Theme.primaryRed
                    Text { anchors.centerIn: parent; text: "JD"; color: "white"; font.pointSize: 20; font.bold: true }
                }
                
                ColumnLayout {
                    Text { text: "John Doe"; color: "white"; font.pixelSize: 22; font.bold: true }
                    Text { text: "Pro Member · ID: #8291-02"; color: Theme.textColorSecondary; font.pixelSize: 14 }
                }
                
                Item { Layout.fillWidth: true }
                
                Button { text: "Edit Profile" }
            }
        }
        
        Item { Layout.fillHeight: true }
    }
}
