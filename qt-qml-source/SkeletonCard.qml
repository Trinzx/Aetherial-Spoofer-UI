import QtQuick 2.15
import QtQuick.Layouts 1.15

Rectangle {
    width: 200; height: 300; radius: 20
    color: Qt.rgba(1, 1, 1, 0.03)
    
    SequentialAnimation on opacity {
        loops: Animation.Infinite
        NumberAnimation { from: 0.1; to: 0.3; duration: 1000; easing.type: Easing.InOutQuad }
        NumberAnimation { from: 0.3; to: 0.1; duration: 1000; easing.type: Easing.InOutQuad }
    }
}
