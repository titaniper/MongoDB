#!/bin/bash

# 최상위 디렉토리 생성
mkdir -p mongodb-study

# 하위 디렉토리 및 파일 생성
cd mongodb-study

# README.md 파일 생성
touch README.md

# 1. Introduction
mkdir -p 1.introduction
touch 1.introduction/1.1.what-is-mongodb.md 1.introduction/1.2.nosql-vs-sql.md 1.introduction/1.3.mongodb-features.md

# 2. Installation
mkdir -p 2.installation/2.2.installation-guide
touch 2.installation/2.1.system-requirements.md 2.installation/2.2.installation-guide/2.2.1.windows.md 2.installation/2.2.installation-guide/2.2.2.macos.md 2.installation/2.2.installation-guide/2.2.3.linux.md 2.installation/2.3.configuration.md

# 3. Basic Operations
mkdir -p 3.basic-operations/3.1.crud-operations
touch 3.basic-operations/3.1.crud-operations/3.1.1.create.md 3.basic-operations/3.1.crud-operations/3.1.2.read.md 3.basic-operations/3.1.crud-operations/3.1.3.update.md 3.basic-operations/3.1.crud-operations/3.1.4.delete.md 3.basic-operations/3.2.data-types.md 3.basic-operations/3.3.query-operators.md

# 4. Advanced Operations
mkdir -p 4.advanced-operations/4.1.indexing 4.advanced-operations/4.2.aggregation
touch 4.advanced-operations/4.1.indexing/4.1.1.single-field-indexes.md 4.advanced-operations/4.1.indexing/4.1.2.compound-indexes.md 4.advanced-operations/4.1.indexing/4.1.3.text-indexes.md 4.advanced-operations/4.2.aggregation/4.2.1.pipeline.md 4.advanced-operations/4.2.aggregation/4.2.2.stages.md 4.advanced-operations/4.2.aggregation/4.2.3.expressions.md 4.advanced-operations/4.3.transactions.md

# 5. Data Modeling
mkdir -p 5.data-modeling/5.2.relationships
touch 5.data-modeling/5.1.document-structure.md 5.data-modeling/5.2.relationships/5.2.1.embedded-documents.md 5.data-modeling/5.2.relationships/5.2.2.references.md 5.data-modeling/5.3.schema-design-patterns.md

# 6. Performance
mkdir -p 6.performance
touch 6.performance/6.1.query-optimization.md 6.performance/6.2.indexing-strategies.md 6.performance/6.3.monitoring-and-profiling.md

# 7. Security
mkdir -p 7.security
touch 7.security/7.1.authentication.md 7.security/7.2.authorization.md 7.security/7.3.encryption.md 7.security/7.4.auditing.md

# 8. Scalability
mkdir -p 8.scalability/8.1.replication 8.scalability/8.2.sharding
touch 8.scalability/8.1.replication/8.1.1.replica-set-setup.md 8.scalability/8.1.replication/8.1.2.failover-and-recovery.md 8.scalability/8.2.sharding/8.2.1.sharding-architecture.md 8.scalability/8.2.sharding/8.2.2.shard-key-selection.md

# 9. Administration
mkdir -p 9.administration
touch 9.administration/9.1.backup-and-restore.md 9.administration/9.2.monitoring.md 9.administration/9.3.upgrading.md

# 10. Drivers and ORMs
mkdir -p 10.drivers-and-orms/10.1.official-drivers
touch 10.drivers-and-orms/10.1.official-drivers/10.1.1.nodejs.md 10.drivers-and-orms/10.1.official-drivers/10.1.2.python.md 10.drivers-and-orms/10.1.official-drivers/10.1.3.java.md 10.drivers-and-orms/10.2.popular-orms.md

# 11. Best Practices
mkdir -p 11.best-practices
touch 11.best-practices/11.1.schema-design.md 11.best-practices/11.2.indexing.md 11.best-practices/11.3.query-optimization.md

# 12. Tools
mkdir -p 12.tools
touch 12.tools/12.1.mongodb-compass.md 12.tools/12