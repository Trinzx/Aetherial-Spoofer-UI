import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

Rectangle {
    width: 80; height: 32
    radius: 16
    color: isActive ? Theme.primaryRed : Qt.rgba(1, 1, 1, 0.05)
    border.color: isActive ? "transparent" : Qt.rgba(1, 1, 1, 0.1)
    
    property bool isActive: false
    property string text: "Filter"
    
    Text {
        anchors.centerIn: parent
        text: root.text
        color: root.isActive ? "white" : Theme.textColorSecondary
        font.pixelSize: 12
        font.bold: true
    }
}
