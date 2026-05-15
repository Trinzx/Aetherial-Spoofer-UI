import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

Item {
    width: 400; height: 50
    Rectangle {
        anchors.fill: parent
        radius: 12
        color: Qt.rgba(1, 1, 1, 0.05)
        border.color: Qt.rgba(1, 1, 1, 0.1)
        
        RowLayout {
            anchors.fill: parent
            anchors.margins: 15
            spacing: 12
            // Search Icon Placeholder
            Rectangle { width: 16; height: 16; color: Theme.textColorMuted; radius: 8 }
            TextInput {
                Layout.fillWidth: true
                color: "white"
                font.pixelSize: 14
                id: input
                // placeholder hand-rolled since Qt 5/6 TextInput doesn't have it natively
                Text {
                    text: "Search assets..."
                    color: Theme.textColorMuted
                    visible: !input.text && !input.activeFocus
                }
            }
        }
    }
}
