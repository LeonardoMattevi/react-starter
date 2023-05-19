migrate((db) => {
  const collection = new Collection({
    "id": "n9p4fvrma8oiq8b",
    "created": "2023-05-19 08:58:27.601Z",
    "updated": "2023-05-19 08:58:27.601Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fgrdvqge",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qfr7ebpw",
        "name": "cost",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "qq7ajd7l",
        "name": "img",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^\\/.*"
        }
      },
      {
        "system": false,
        "id": "ob73rok3",
        "name": "tmb",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^\\/.*"
        }
      },
      {
        "system": false,
        "id": "qmqdomst",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_n9p4fvrma8oiq8b_created_idx` ON `products` (`created`)",
      "CREATE UNIQUE INDEX `idx_unique_fgrdvqge` ON `products` (`name`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b");

  return dao.deleteCollection(collection);
})
