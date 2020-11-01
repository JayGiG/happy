function saveOrphanage(db, orphanage) {
    return db.run(`
        INSERT INTO orphanages(
            lat,
            lng,
            name,
            whatsapp,
            about,
            images,
            instructions,
            opening_hours,
            open_on_weekend
        ) VALUES (
            "${orphanage.lat}",
            "${orphanage.lng}",
            "${orphanage.name}",
            "${orphanage.whatsapp}",
            "${orphanage.about}",
            "${orphanage.images}",
            "${orphanage.instructions}",
            "${orphanage.opening_hours}",
            "${orphanage.open_on_weekend}",
        );
    `);
}

module.exports = saveOrphanage;