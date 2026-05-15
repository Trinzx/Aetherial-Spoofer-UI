import QtQuick 2.15
import QtQuick.Layouts 1.15

Rectangle {
    Layout.fillWidth: true
    Layout.preferredHeight: 100
    radius: 12
    color: Qt.rgba(1, 1, 1, 0.05)
    border.color: Qt.rgba(1, 1, 1, 0.1)
    
    property string title: ""
    property string value: ""
    property string icon: ""

    ColumnLayout {
        anchors.centerIn: parent
        spacing: 5
        Text {
            text: root.title
            font.pixelSize: 11
            font.bold: true
            color: Theme.textColorMuted
            Layout.alignment: Qt.AlignHCenter
        }
        Text {
            text: root.value
            font.pixelSize: 24
            font.bold: true
            color: "white"
            Layout.alignment: Qt.AlignHCenter
        }
    }
}
