# MongoDB 학습 디렉토리 구조

```
mongodb-study/
├── README.md
├── 1.introduction/
│   ├── 1.1.what-is-mongodb.md
│   ├── 1.2.nosql-vs-sql.md
│   └── 1.3.mongodb-features.md
├── 2.installation/
│   ├── 2.1.system-requirements.md
│   ├── 2.2.installation-guide/
│   │   ├── 2.2.1.windows.md
│   │   ├── 2.2.2.macos.md
│   │   └── 2.2.3.linux.md
│   └── 2.3.configuration.md
├── 3.basic-operations/
│   ├── 3.1.crud-operations/
│   │   ├── 3.1.1.create.md
│   │   ├── 3.1.2.read.md
│   │   ├── 3.1.3.update.md
│   │   └── 3.1.4.delete.md
│   ├── 3.2.data-types.md
│   └── 3.3.query-operators.md
├── 4.advanced-operations/
│   ├── 4.1.indexing/
│   │   ├── 4.1.1.single-field-indexes.md
│   │   ├── 4.1.2.compound-indexes.md
│   │   └── 4.1.3.text-indexes.md
│   ├── 4.2.aggregation/
│   │   ├── 4.2.1.pipeline.md
│   │   ├── 4.2.2.stages.md
│   │   └── 4.2.3.expressions.md
│   └── 4.3.transactions.md
├── 5.data-modeling/
│   ├── 5.1.document-structure.md
│   ├── 5.2.relationships/
│   │   ├── 5.2.1.embedded-documents.md
│   │   └── 5.2.2.references.md
│   └── 5.3.schema-design-patterns.md
├── 6.performance/
│   ├── 6.1.query-optimization.md
│   ├── 6.2.indexing-strategies.md
│   └── 6.3.monitoring-and-profiling.md
├── 7.security/
│   ├── 7.1.authentication.md
│   ├── 7.2.authorization.md
│   ├── 7.3.encryption.md
│   └── 7.4.auditing.md
├── 8.scalability/
│   ├── 8.1.replication/
│   │   ├── 8.1.1.replica-set-setup.md
│   │   └── 8.1.2.failover-and-recovery.md
│   └── 8.2.sharding/
│       ├── 8.2.1.sharding-architecture.md
│       └── 8.2.2.shard-key-selection.md
├── 9.administration/
│   ├── 9.1.backup-and-restore.md
│   ├── 9.2.monitoring.md
│   └── 9.3.upgrading.md
├── 10.drivers-and-orms/
│   ├── 10.1.official-drivers/
│   │   ├── 10.1.1.nodejs.md
│   │   ├── 10.1.2.python.md
│   │   └── 10.1.3.java.md
│   └── 10.2.popular-orms.md
├── 11.best-practices/
│   ├── 11.1.schema-design.md
│   ├── 11.2.indexing.md
│   └── 11.3.query-optimization.md
├── 12.tools/
│   ├── 12.1.mongodb-compass.md
│   ├── 12.2.mongodb-atlas.md
│   └── 12.3.mongodbvs.md
└── 13.testing/
    ├── 13.1.unit-testing.md
    ├── 13.2.integration-testing.md
    └── 13.3.performance-testing.md
```

## 디렉토리 및 파일 설명

1. introduction: MongoDB 소개
   - 1.1.what-is-mongodb.md: MongoDB의 정의와 특징
   - 1.2.nosql-vs-sql.md: NoSQL과 SQL 데이터베이스 비교
   - 1.3.mongodb-features.md: MongoDB의 주요 기능

2. installation: MongoDB 설치 가이드
   - 2.1.system-requirements.md: 시스템 요구사항
   - 2.2.installation-guide: 운영체제별 설치 가이드
   - 2.3.configuration.md: MongoDB 설정 방법

3. basic-operations: 기본 연산
   - 3.1.crud-operations: 생성, 읽기, 수정, 삭제 연산
   - 3.2.data-types.md: MongoDB에서 지원하는 데이터 타입
   - 3.3.query-operators.md: 쿼리 연산자 사용법

4. advanced-operations: 고급 연산
   - 4.1.indexing: 인덱싱 전략 및 구현
   - 4.2.aggregation: 집계 프레임워크
   - 4.3.transactions.md: 트랜잭션 처리

5. data-modeling: 데이터 모델링
   - 5.1.document-structure.md: 문서 구조 설계
   - 5.2.relationships: 관계 모델링 기법
   - 5.3.schema-design-patterns.md: 스키마 설계 패턴

6. performance: 성능 최적화
   - 6.1.query-optimization.md: 쿼리 최적화 기법
   - 6.2.indexing-strategies.md: 효과적인 인덱싱 전략
   - 6.3.monitoring-and-profiling.md: 성능 모니터링 및 프로파일링

7. security: 보안
   - 7.1.authentication.md: 인증 메커니즘
   - 7.2.authorization.md: 권한 관리
   - 7.3.encryption.md: 데이터 암호화
   - 7.4.auditing.md: 감사 로깅

8. scalability: 확장성
   - 8.1.replication: 복제 설정 및 관리
   - 8.2.sharding: 샤딩 아키텍처 및 구현

9. administration: 관리
   - 9.1.backup-and-restore.md: 백업 및 복구 전략
   - 9.2.monitoring.md: 시스템 모니터링
   - 9.3.upgrading.md: MongoDB 버전 업그레이드 가이드

10. drivers-and-orms: 드라이버 및 ORM
    - 10.1.official-drivers: 공식 드라이버 사용법
    - 10.2.popular-orms.md: 인기 있는 ORM 도구

11. best-practices: 모범 사례
    - 11.1.schema-design.md: 효과적인 스키마 설계
    - 11.2.indexing.md: 인덱싱 모범 사례
    - 11.3.query-optimization.md: 쿼리 최적화 팁

12. tools: MongoDB 관련 도구
    - 12.1.mongodb-compass.md: MongoDB Compass 사용법
    - 12.2.mongodb-atlas.md: MongoDB Atlas 클라우드 서비스
    - 12.3.mongodbvs.md: MongoDB 개발 도구

13. testing: 테스트
    - 13.1.unit-testing.md: 단위 테스트 방법론
    - 13.2.integration-testing.md: 통합 테스트 전략
    - 13.3.performance-testing.md: 성능 테스트 기법

