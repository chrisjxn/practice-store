module.exports = {
    readAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_all_brands()
            .then(brands => res.status(200).send(brands))
            .catch(() => res.status(500).send());
    },
    readByRegion: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_brands_by_region([req.params.region])
            .then(brands => res.status(200).send(brands))
            .catch(() => res.status(500).send());
    },
    readByCountry: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_brands_by_country([req.params.country])
            .then(brands => res.status(200).send(brands))
            .catch(() => res.status(500).send());
    },
    readOne: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_one_brand([req.params.brand])
            .then(brand => res.status(200).send(brand))
            .catch(() => res.status(500).send());
    }
};