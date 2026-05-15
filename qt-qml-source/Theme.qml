import QtQuick 2.15

/**
 * Shared aesthetic tokens for the Nova Red Loader.
 */
QtObject {
    readonly property color backgroundColor: "#0A0A0B"
    readonly property color primaryRed: "#E11D48"
    readonly property color accentRed: "#FB7185"
    readonly property color surfaceColor: Qt.rgba(1, 1, 1, 0.05)
    readonly property color surfaceBorderColor: Qt.rgba(1, 1, 1, 0.1)
    
    readonly property color textColorPrimary: "#FFFFFF"
    readonly property color textColorSecondary: "#94A3B8"
    readonly property color textColorMuted: "#64748B"
    
    readonly property int radiusSmall: 8
    readonly property int radiusMedium: 12
    readonly property int radiusLarge: 20
    
    readonly property string fontFamily: "Inter"
}
