import QtQuick 2.15
import QtQuick.Layouts 1.15

Item {
    // Simply proxying the products page for library view in this mockup
    Loader {
        anchors.fill: parent
        source: "ProductsPage.qml"
    }
}
