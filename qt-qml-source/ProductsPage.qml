import QtQuick 2.15
import QtQuick.Layouts 1.15
import QtQuick.Controls 2.15

Item {
    id: root

    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 40
        spacing: 30

        RowLayout {
            Layout.fillWidth: true
            SearchBar { Layout.preferredWidth: 400 }
            Item { Layout.fillWidth: true }
            Button { text: "Refresh Catalog" }
        }

        GridView {
            id: catalogGrid
            Layout.fillWidth: true
            Layout.fillHeight: true
            cellWidth: 320
            cellHeight: 340
            clip: true
            
            model: catalogModel // Provided via C++ context
            
            delegate: ProductCard {
                width: 300
                height: 320
                name: model.name
                version: model.version
                status: model.status
            }
        }
    }
}
