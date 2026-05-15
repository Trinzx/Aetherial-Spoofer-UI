import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

ScrollView {
    clip: true
    contentWidth: -1 // Auto
    
    ColumnLayout {
        width: parent.width - 40
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.top: parent.top
        anchors.topMargin: 20
        spacing: 30

        // Hero Section
        Rectangle {
            Layout.fillWidth: true
            Layout.preferredHeight: 300
            radius: 20
            clip: true
            color: "#1A1A1B"
            
            Image {
                anchors.fill: parent
                source: "placeholder_hero.jpg"
                fillMode: Image.PreserveAspectCrop
                opacity: 0.4
            }
            
            ColumnLayout {
                anchors.left: parent.left
                anchors.bottom: parent.bottom
                anchors.margins: 40
                spacing: 10
                
                Text {
                    text: "AETHER ENGINE 2.5"
                    font.pixelSize: 42
                    font.weight: Font.Black
                    color: "white"
                }
                
                Text {
                    text: "Experience the next generation of path-tracing efficiency."
                    font.pixelSize: 18
                    color: Theme.textColorSecondary
                    Layout.maximumWidth: 500
                    wrapMode: Text.WordWrap
                }
                
                RowLayout {
                    spacing: 15
                    Button { text: "Update Now"; } // Styled background omitted for brevity
                }
            }
        }

        // Stats
        RowLayout {
            Layout.fillWidth: true
            spacing: 20
            
            StatCard { Layout.fillWidth: true; title: "INSTALLED"; value: "14"; icon: "check" }
            StatCard { Layout.fillWidth: true; title: "UPDATES"; value: "3"; icon: "sync" }
            StatCard { Layout.fillWidth: true; title: "HEALTH"; value: "OPTIMAL"; icon: "heart" }
        }
        
        Item { Layout.preferredHeight: 40 }
    }
}
