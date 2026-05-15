#include "NovaModel.h"

NovaModel::NovaModel(QObject *parent)
    : QAbstractListModel(parent)
{
    m_products << ProductItem{"Aether Core", "v2.4.1", "installed", "aether.jpg", "Engine"};
    m_products << ProductItem{"Chrono Bloom", "v1.0.5", "updating", "bloom.jpg", "Shaders"};
    m_products << ProductItem{"Nova Toolkit", "v3.2.0", "available", "toolkit.jpg", "Utility"};
    m_products << ProductItem{"Vertex Pro", "v1.1.0", "expired", "vertex.jpg", "Geometry"};
}

int NovaModel::rowCount(const QModelIndex &parent) const
{
    if (parent.isValid()) return 0;
    return m_products.count();
}

QVariant NovaModel::data(const QModelIndex &index, int role) const
{
    if (!index.isValid()) return QVariant();

    const ProductItem &item = m_products[index.row()];
    if (role == NameRole) return item.name;
    if (role == VersionRole) return item.version;
    if (role == StatusRole) return item.status;
    if (role == ImageRole) return item.image;
    if (role == CategoryRole) return item.category;

    return QVariant();
}

QHash<int, QByteArray> NovaModel::roleNames() const
{
    QHash<int, QByteArray> roles;
    roles[NameRole] = "name";
    roles[VersionRole] = "version";
    roles[StatusRole] = "status";
    roles[ImageRole] = "image";
    roles[CategoryRole] = "category";
    return roles;
}
