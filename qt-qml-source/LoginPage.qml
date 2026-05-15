import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 1.15
import QtGraphicalEffects 1.15

Rectangle {
    id: root
    color: Theme.backgroundColor
    
    signal loginRequested()

    // Cinematic Background
    Rectangle {
        anchors.fill: parent
        color: Theme.backgroundColor
        
        // Animated gradient simulated
        LinearGradient {
            anchors.fill: parent
            start: Qt.point(0, 0)
            end: Qt.point(root.width, root.height)
            gradient: Gradient {
                GradientStop { position: 0.0; color: Qt.rgba(225/255, 29/255, 72/255, 0.1) }
                GradientStop { position: 1.0; color: "transparent" }
            }
        }
    }

    ColumnLayout {
        anchors.centerIn: parent
        width: 400
        spacing: 30

        // Logo
        Rectangle {
            Layout.alignment: Qt.AlignHCenter
            width: 80; height: 80
            radius: 20
            color: Theme.primaryRed
            rotation: 3
            
            Text {
                anchors.centerIn: parent
                text: "N"
                font.pixelSize: 40
                font.bold: true
                color: "white"
            }
            
            layer.enabled: true
            layer.effect: DropShadow {
                transparentBorder: true
                color: Qt.rgba(225/255, 29/255, 72/255, 0.5)
                radius: 20
                samples: 25
            }
        }

        Text {
            Layout.alignment: Qt.AlignHCenter
            text: "NOVA DISTRIBUTION"
            color: "white"
            font.pixelSize: 24
            font.weight: Font.Black
            letterSpacing: 2
        }

        // Login Card
        Rectangle {
            Layout.preferredWidth: 400
            height: 380
            radius: 20
            color: Qt.rgba(1, 1, 1, 0.03)
            border.color: Qt.rgba(1, 1, 1, 0.1)
            
            ColumnLayout {
                anchors.fill: parent
                anchors.margins: 40
                spacing: 20

                TextField {
                    Layout.fillWidth: true
                    placeholderText: "Account Email"
                    background: Rectangle {
                        color: Qt.rgba(1, 1, 1, 0.05)
                        radius: 12
                        border.color: parent.activeFocus ? Theme.primaryRed : "transparent"
                    }
                    color: "white"
                }

                TextField {
                    Layout.fillWidth: true
                    placeholderText: "Security Key"
                    echoMode: TextInput.Password
                    background: Rectangle {
                        color: Qt.rgba(1, 1, 1, 0.05)
                        radius: 12
                        border.color: parent.activeFocus ? Theme.primaryRed : "transparent"
                    }
                    color: "white"
                }

                Button {
                    Layout.fillWidth: true
                    Layout.preferredHeight: 50
                    text: "Access Workspace"
                    onClicked: root.loginRequested()
                    
                    contentItem: Text {
                        text: parent.text
                        color: "white"
                        font.bold: true
                        horizontalAlignment: Text.AlignHCenter
                        verticalAlignment: Text.AlignVCenter
                    }
                    
                    background: Rectangle {
                        color: parent.down ? "#be123c" : Theme.primaryRed
                        radius: 12
                    }
                }
            }
        }
    }
}
