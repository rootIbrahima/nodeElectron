const express = require('express');
const router = express.Router();
const db = require('../database');

router.post("/clients", async (req, res) => {
    const { prenom, nom, numcompte, code, solde } = req.body;
    const client = await db.Clients.create({ prenom, nom, numcompte, code, solde });
    res.status(201).json({ data: client });
});

router.get("/clients", async (req, res) => {
    const clients = await db.Clients.findAll({
        attributes: ["id", "prenom","nom","numcompte","code","solde","createdAt", "updatedAt"],
    });
    res.status(200).json({ data: clients });
});

router.get("/clients/:id", async (req, res) => {
    const { id } = req.params;
    const client = await db.Clients.findOne({
        attributes: ["id", "prenom", "nom","numcompte","code","solde","createdAt", "updatedAt"],
        where: { id },
    });
    res.status(200).json({ data: client });
});

router.put("/clients/:id", async (req, res) => {
    const { id } = req.params;
    const { solde } = req.body;
    const client = await db.Clients.findOne({ where: { id } });
    if (!client) {
        return res.status(404).json({ message: "Client inexistant." });
    }
    await db.Clients.update(
        { solde },
        { where: { id } }
    );
    res.status(200).json({ data: "Mise à jour réussie du client." });
});

router.delete("/clients/:id", async (req, res) => {
    const { id } = req.params;
    const client = await db.Clients.findOne({ where: { id } });
    if (!client) {
        return res.status(404).json({ message: "Client n'existe pas." });
    }
    await db.Clients.destroy({ where: { id } });
    res.status(200).json({ data: "Client supprimé avec succès." });
});

module.exports = router;
