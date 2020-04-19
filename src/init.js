// import { openDB } from 'idb'
import DB from 'indexeddb-crud';

const DbVersion = 1
const DBName = "LocationDB"
const ObjectStoreName = "locations"

var DBConfig = {
    "name": DBName,
    "version": DbVersion,
    "storeConfig": [
      {
        "storeName": ObjectStoreName,
        "key": "id",
        "initialData": [
            {
              "id": 1,
              "name": "Ojo",
              "zone": "Lagos State",
              "region": "South West"
            },
            {
              "id": 2,
              "name": "Ahiazu Mbaise",
              "zone": "Imo State",
              "region": "South East"
            },
            {
              "id": 3,
              "name": "Akoko-Edo",
              "zone": "Edo State",
              "region": "South South"
            },
            {
              "id": 4,
              "name": "Anka",
              "zone": "Zamfara State",
              "region": "North West"
            },
            {
              "id": 5,
              "name": "Akwanga",
              "zone": "Nasarawa State",
              "region": "North Central"
            }
          ]
      }
    ]
  }

function addData() {
    let data = { 
        "id": DB.getNewKey(ObjectStoreName), 
        "name": "Aharuha",
        "zone": "Naygara State",
        "region": "East central"
      }
      DB.addItem(data, ObjectStoreName);
      getAllData(ObjectStoreName)
}

export const getAllData = (ObjectStoreName) => {
    DB.getAll(ObjectStoreName).then(data => data)
}

export const createDatabseInIndexedDB = () => {
    DB.open(DBConfig).then(addData);
}



