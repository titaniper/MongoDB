import { MongoClient, Db, Collection } from "mongodb";

// MongoDB 연결 URI 및 옵션 설정
const uri = "mongodb://root:example@localhost:31017";
const client = new MongoClient(uri);

// 인터페이스 정의
interface User {
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

        // 예제 데이터 삽입
        await insertData();

        // 데이터 조회
        await findData();

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
        console.log("Connection closed");
    }
}

async function insertData() {
    const user: User = {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    };

    const result = await usersCollection.insertOne(user);
    console.log(`New user created with the following id: ${result.insertedId}`);
}

async function findData() {
    const users = await usersCollection.find({}).toArray();
    console.log("Found users:", users);
}

// MongoDB에 연결
connectToMongoDB();
