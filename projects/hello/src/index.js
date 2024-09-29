


db.users.find({"name": "user101"})




db.users.find({"name": "user101"}).explain("executionStats");

-- totalDocsExaminaed
// {"executionSuccess": true, "nReturned": new NumberInt("0"), "executionTimeMillis": new NumberInt("0"), "totalKeysExamined": new NumberInt("0"), "totalDocsExamined": new NumberInt("0"), "executionStages": {"stage": "EOF", "nReturned": new NumberInt("0"), "executionTimeMillisEstimate": new NumberInt("0"), "works": new NumberInt("1"), "advanced": new NumberInt("0"), "needTime": new NumberInt("0"), "needYield": new NumberInt("0"), "saveState": new NumberInt("0"), "restoreState": new NumberInt("0"), "isEOF": new NumberInt("1")}}
//{"namespace": "test.users", "indexFilterSet": false, "parsedQuery": {"name": {"$eq": "user101"}}, "maxIndexedOrSolutionsReached": false, "maxIndexedAndSolutionsReached": false, "maxScansToExplodeReached": false, "winningPlan": {"stage": "EOF"}, "rejectedPlans": []}


// 단일 인덱스
db.users.createIndex({ name: 1});


use testdb;

db.users.find({});






// 복합 인덱스
db.users.createIndex({ name: 1});

db.users.createIndex({ age: 1, name: 1});


db.users.deleteMany({});



db.users.find().sort({ "age": 1, "name": 1})


db.users.find({"i": 0})


db.users.find({}, {"_id": 0, "i": 0, })



// 21 찾는 동등 쿼리, 이 equality query는 내림차순 정렬 -1은 내림차순(descending) 정렬을 의미합니다. (Z에서 A 순으로)
db.users.find({"age": 21}).sort({"name": -1})










// range query
db.users.find({"age": { "$gte": 21}});


