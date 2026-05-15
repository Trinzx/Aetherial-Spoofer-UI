import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 1.15
import QtGraphicalEffects 1.15

ApplicationWindow {
    id: window
    width: 1200
    height: 800
    visible: true
    title: "Nova Red Distribution Terminal"
    color: Theme.backgroundColor

    // Handle session state
    property bool isAuthenticated: false
    property string currentView: "dashboard"

    Theme { id: theme }

    StackView {
        id: mainStack
        anchors.fill: parent
        initialItem: loginPage

        Component {
            id: loginPage
            LoginPage {
                onLoginRequested: {
                    window.isAuthenticated = true
                    mainStack.replace(dashboardPage)
                }
            }
        }

        Component {
            id: dashboardPage
            Item {
                RowLayout {
                    anchors.fill: parent
                    spacing: 0

                    Sidebar {
                        Layout.fillHeight: true
                        Layout.preferredWidth: 280
                        activeTab: window.currentView
                        onTabChanged: (tab) => window.currentView = tab
                    }

                    ColumnLayout {
                        Layout.fillWidth: true
                        Layout.fillHeight: true
                        spacing: 0

                        TopBar {
                            Layout.fillWidth: true
                            Layout.preferredHeight: 80
                        }

                        // Content Router
                        Loader {
                            Layout.fillWidth: true
                            Layout.fillHeight: true
                            source: {
                                switch(window.currentView) {
                                    case "dashboard": return "DashboardPage.qml"
                                    case "products": return "ProductsPage.qml"
                                    case "library": return "LibraryPage.qml"
                                    default: return "DashboardPage.qml"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
