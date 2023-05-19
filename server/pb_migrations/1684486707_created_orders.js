migrate((db) => {
  const collection = new Collection({
    "id": "7zhup1uycgzmnww",
    "created": "2023-05-19 08:58:27.601Z",
    "updated": "2023-05-19 08:58:27.601Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0ruqkblm",
        "name": "order",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "q5kvnfeu",
        "name": "user",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "oz8v51bl",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "done"
          ]
        }
      },
      {
        "system": false,
        "id": "gclischn",
        "name": "total",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_7zhup1uycgzmnww_created_idx` ON `orders` (`created`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww");

  return dao.deleteCollection(collection);
})
