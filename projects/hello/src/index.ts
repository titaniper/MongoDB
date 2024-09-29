import { MongoClient, Db, Collection } from "mongodb";

// MongoDB 연결 URI 및 옵션 설정
// const uri = "mongodb://root:example@localhost:31017";
// const client = new MongoClient(uri);
const uri = "mongodb://root:example@localhost:31017";

const client = new MongoClient(uri, {
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true
  });

// 인터페이스 정의
interface User {
    i: number
    name: string;
    age: number;
    email: string;
}

// 데이터베이스와 컬렉션 참조
let db: Db;
let usersCollection: Collection<User>;

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        // 데이터베이스와 컬렉션 선택
        db = client.db("testdb");
        usersCollection = db.collection<User>("users");

        await insertData();
        // await usersCollection.find({"name": "user101"}).explain("executionStats");
        // usersCollection`.createIndex({ name: 1});`

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
        console.log("Connection closed");
    }
}

// MongoDB에 연결
connectToMongoDB();

async function insertData() {
    for (let i = 0; i < 1000; i++) {
        await usersCollection.insertOne({
            i,
            name: "user"+i,
            age: Math.floor(Math.random() * 120),
            email: ""
        })
    }
}