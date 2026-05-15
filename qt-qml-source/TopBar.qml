import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

Item {
    id: root
    
    RowLayout {
        anchors.fill: parent
        anchors.margins: 20
        
        Text {
            text: "WORKSPACE TERMINAL"
            font.pixelSize: 18
            font.bold: true
            color: "white"
            letterSpacing: 1
        }
        
        Item { Layout.fillWidth: true }
        
        RowLayout {
            spacing: 20
            
            // Profile Area
            Rectangle {
                width: 150; height: 44
                radius: 12
                color: Qt.rgba(1,1,1,0.05)
                RowLayout {
                    anchors.centerIn: parent
                    spacing: 10
                    Rectangle { width: 28; height: 28; radius: 14; color: Theme.primaryRed }
                    Text { text: "John Doe"; color: "white"; font.pointSize: 9 }
                }
            }
        }
    }
    
    Rectangle {
        anchors.bottom: parent.bottom
        width: parent.width; height: 1
        color: Qt.rgba(1,1,1,0.05)
    }
}
