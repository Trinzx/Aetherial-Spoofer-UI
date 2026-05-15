#ifndef NOVAMODEL_H
#define NOVAMODEL_H

#include <QAbstractListModel>
#include <QStringList>

struct ProductItem {
    QString name;
    QString version;
    QString status;
    QString image;
    QString category;
};

class NovaModel : public QAbstractListModel
{
    Q_OBJECT

public:
    enum Roles {
        NameRole = Qt::UserRole + 1,
        VersionRole,
        StatusRole,
        ImageRole,
        CategoryRole
    };

    explicit NovaModel(QObject *parent = nullptr);

    int rowCount(const QModelIndex &parent = QModelIndex()) const override;
    QVariant data(const QModelIndex &index, int role = Qt::DisplayRole) const override;
    QHash<int, QByteArray> roleNames() const override;

private:
    QList<ProductItem> m_products;
};

#endif // NOVAMODEL_H
