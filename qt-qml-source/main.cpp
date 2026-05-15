#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QQmlContext>
#include "NovaModel.h"

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;

    // Register our model for catalog data
    NovaModel catalogModel;
    engine.rootContext()->setContextProperty("catalogModel", &catalogModel);

    const QUrl url(QStringLiteral("qrc:/AppWindow.qml"));
    QObject::connect(&engine, &QQmlApplicationEngine::objectCreated,
                     &app, [url](QObject *obj, const QUrl &objUrl) {
        if (!obj && url == objUrl)
            QCoreApplication::exit(-1);
    }, Qt::QueuedConnection);
    
    engine.load(url);

    return app.exec();
}
