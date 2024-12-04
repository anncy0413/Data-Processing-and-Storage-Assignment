class InMemoryDB {
    constructor() {
        this.mainData = {};
        this.tempData = null;
        this.isTransactionActive = false;
    }

    get(key) {
        if (this.isTransactionActive && this.tempData.hasOwnProperty(key)) {
            return this.tempData[key];
        }
        return this.mainData[key] || null;
    }

    put(key, value) {
        if (!this.isTransactionActive) {
            throw new Error("Transaction is not active");
        }
        this.tempData[key] = value;
    }

    begin_transaction() {
        if (this.isTransactionActive) {
            throw new Error("Transaction already started");
        }
        this.tempData = { ...this.mainData };
        this.isTransactionActive = true;
    }

    commit() {
        if (!this.isTransactionActive) {
            throw new Error("No transaction to commit");
        }
        this.mainData = { ...this.tempData };
        this.tempData = null;
        this.isTransactionActive = false;
    }

    rollback() {
        if (!this.isTransactionActive) {
            throw new Error("No transaction to rollback");
        }
        this.tempData = null;
        this.isTransactionActive = false;
    }
}

const db = new InMemoryDB();
console.log(db.get("A"));

try {
    db.put("A", 5);
} catch (e) {
    console.log(e.message);
}

db.begin_transaction();
db.put("A", 5);
console.log(db.get("A"));
db.put("A", 6);
db.commit();
console.log(db.get("A"));

try {
    db.commit();
} catch (e) {
    console.log(e.message);
}

db.begin_transaction();
db.put("B", 10);
db.rollback();
console.log(db.get("B"));
