import { sidebar } from "vuepress-theme-hope";
import { highQualityTechnicalArticles } from "./sidebar/high-quality-technical-articles";
import { aboutTheAuthor } from "./sidebar/about-the-author";
import { books } from "./sidebar/books";
import { openSourceProject } from "./sidebar/open-source-project";

export const sidebarConfig = sidebar({
  // 应该把更精确的路径放置在前边
  "/open-source-project/": openSourceProject,
  "/books/": books,
  "/about-the-author/": aboutTheAuthor,
  "/high-quality-technical-articles/": highQualityTechnicalArticles,
  "/javaguide/": ["intro", "history", "contribution-guideline", "faq", "todo"],
  "/zhuanlan/": [
    "java-mian-shi-zhi-bei",
    "handwritten-rpc-framework",
    "source-code-reading",
  ],
  // 必须放在最后面
  "/": [
    {
      text: "面试准备",
      icon: "interview",
      collapsible: true,
      prefix: "interview-preparation/",
      children: [
        "teach-you-how-to-prepare-for-the-interview-hand-in-hand",
        "project-experience-guide",
        "interview-experience",
        "self-test-of-common-interview-questions",
      ],
    },
    {
      text: "Java",
      icon: "java",
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "基础",
          prefix: "basis/",
          icon: "basic",
          children: [
            "java-basic-questions-01",
            "java-basic-questions-02",
            "java-basic-questions-03",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "why-there-only-value-passing-in-java",
                "serialization",
                "generics-and-wildcards",
                "reflection",
                "proxy",
                "bigdecimal",
                "unsafe",
                "spi",
                "syntactic-sugar",
              ],
            },
          ],
        },
        {
          text: "集合",
          prefix: "collection/",
          icon: "container",
          children: [
            "java-collection-questions-01",
            "java-collection-questions-02",
            "java-collection-precautions-for-use",
            {
              text: "源码分析",
              icon: "star",
              collapsible: true,
              children: [
                "arraylist-source-code",
                "hashmap-source-code",
                "concurrent-hash-map-source-code",
              ],
            },
          ],
        },

        {
          text: "IO",
          prefix: "io/",
          icon: "code",
          children: ["io-basis", "io-design-patterns", "io-model"],
        },
        {
          text: "并发编程",
          prefix: "concurrent/",
          icon: "et-performance",
          children: [
            "java-concurrent-questions-01",
            "java-concurrent-questions-02",
            "java-concurrent-questions-03",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "optimistic-lock-and-pessimistic-lock",
                "jmm",
                "java-thread-pool-summary",
                "java-thread-pool-best-practices",
                "java-concurrent-collections",
                "aqs",
                "atomic-classes",
                "threadlocal",
                "completablefuture-intro",
              ],
            },
          ],
        },
        {
          text: "JVM",
          prefix: "jvm/",
          icon: "virtual_machine",
          collapsible: true,
          children: [
            "memory-area",
            "jvm-garbage-collection",
            "class-file-structure",
            "class-loading-process",
            "classloader",
            "jvm-parameters-intro",
            "jvm-intro",
            "jdk-monitoring-and-troubleshooting-tools",
          ],
        },
        {
          text: "新特性",
          prefix: "new-features/",
          icon: "featured",
          collapsible: true,
          children: [
            "java8-common-new-features",
            "java8-tutorial-translate",
            "java9",
            "java10",
            "java11",
            "java12-13",
            "java14",
            "java15",
            "java16",
            "java17",
            "java18",
            "java19",
          ],
        },
      ],
    },
    {
      text: "计算机基础",
      icon: "computer",
      prefix: "cs-basics/",
      collapsible: true,
      children: [
        {
          text: "网络",
          prefix: "network/",
          icon: "network",
          children: [
            "other-network-questions",
            "computer-network-xiexiren-summary",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "osi&tcp-ip-model",
                "application-layer-protocol",
                "http&https",
                "http1.0&http1.1",
                "http-status-codes",
                "tcp-connection-and-disconnection",
                "tcp-reliability-guarantee",
                "arp",
                "network-attack-means",
              ],
            },
          ],
        },
        {
          text: "操作系统",
          prefix: "operating-system/",
          icon: "caozuoxitong",
          children: [
            "operating-system-basic-questions-01",
            "linux-intro",
            "shell-intro",
          ],
        },
        {
          text: "数据结构",
          prefix: "data-structure/",
          icon: "people-network-full",
          collapsible: true,
          children: [
            "linear-data-structure",
            "graph",
            "heap",
            "tree",
            "red-black-tree",
            "bloom-filter",
          ],
        },
        {
          text: "算法",
          prefix: "algorithms/",
          icon: "suanfaku",
          collapsible: true,
          children: [
            "string-algorithm-problems",
            "linkedlist-algorithm-problems",
            "the-sword-refers-to-offer",
            "10-classical-sorting-algorithms",
          ],
        },
      ],
    },
    {
      text: "数据库",
      icon: "database",
      prefix: "database/",
      collapsible: true,
      children: [
        {
          text: "基础",
          icon: "basic",
          children: [
            "basis",
            "nosql",
            "character-set",
            {
              text: "SQL",
              icon: "SQL",
              prefix: "sql/",
              collapsible: true,
              children: ["sql-syntax-summary", "sql-questions-01"],
            },
          ],
        },
        {
          text: "MySQL",
          prefix: "mysql/",
          icon: "mysql",
          children: [
            "mysql-questions-01",
            "mysql-high-performance-optimization-specification-recommendations",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "mysql-index",
                {
                  text: "MySQL三大日志详解",
                  link: "mysql-logs",
                },
                "transaction-isolation-level",
                "innodb-implementation-of-mvcc",
                "how-sql-executed-in-mysql",
                "mysql-query-cache",
                "mysql-query-execution-plan",
                "mysql-auto-increment-primary-key-continuous",
                "some-thoughts-on-database-storage-time",
                "index-invalidation-caused-by-implicit-conversion",
              ],
            },
          ],
        },
        {
          text: "Redis",
          prefix: "redis/",
          icon: "redis",
          children: [
            "cache-basics",
            "redis-questions-01",
            "redis-questions-02",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "3-commonly-used-cache-read-and-write-strategies",
                "redis-data-structures-01",
                "redis-data-structures-02",
                "redis-memory-fragmentation",
                "redis-common-blocking-problems-summary",
                "redis-cluster",
              ],
            },
          ],
        },
        {
          text: "Elasticsearch",
          prefix: "elasticsearch/",
          icon: "elasticsearch",
          collapsible: true,
          children: ["elasticsearch-questions-01"],
        },
        {
          text: "MongoDB",
          prefix: "mongodb/",
          icon: "mongodb",
          collapsible: true,
          children: ["mongodb-questions-01", "mongodb-questions-02"],
        },
      ],
    },
    {
      text: "开发工具",
      icon: "tool",
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "Maven",
          icon: "configuration",
          prefix: "maven/",
          children: ["maven-core-concepts"],
        },
        {
          text: "Gradle",
          icon: "gradle",
          prefix: "gradle/",
          children: ["gradle-core-concepts"],
        },
        {
          text: "Git",
          icon: "git",
          prefix: "git/",
          children: ["git-intro", "github-tips"],
        },
        {
          text: "Docker",
          icon: "docker1",
          prefix: "docker/",
          children: ["docker-intro", "docker-in-action"],
        },
        {
          text: "IDEA",
          icon: "intellijidea",
          link: "https://gitee.com/SnailClimb/awesome-idea-tutorial",
        },
      ],
    },
    {
      text: "常用框架",
      prefix: "system-design/framework/",
      icon: "framework",
      collapsible: true,
      children: [
        {
          text: "Spring&Spring Boot",
          icon: "bxl-spring-boot",
          prefix: "spring/",
          children: [
            "spring-knowledge-and-questions-summary",
            "springboot-knowledge-and-questions-summary",
            "spring-common-annotations",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "spring-transaction",
                "spring-design-patterns-summary",
                "spring-boot-auto-assembly-principles",
              ],
            },
          ],
        },
        "mybatis/mybatis-interview",
        "netty",
      ],
    },
    {
      text: "系统设计",
      icon: "xitongsheji",
      prefix: "system-design/",
      collapsible: true,
      children: [
        {
          text: "基础",
          prefix: "basis/",
          icon: "basic",
          children: [
            "RESTfulAPI",
            "software-engineering",
            "naming",
            "refactoring",
            {
              text: "单元测试指南",
              link: "unit-test",
            },
          ],
        },
        {
          text: "安全",
          prefix: "security/",
          icon: "security-fill",
          collapsible: true,
          children: [
            "basis-of-authority-certification",
            "jwt-intro",
            "advantages&disadvantages-of-jwt",
            "sso-intro",
            "design-of-authority-system",
            "sentive-words-filter",
            "data-desensitization",
          ],
        },
        "system-design-questions",
        "design-pattern",
        "schedule-task",
        "web-real-time-message-push",
      ],
    },
    {
      text: "分布式",
      icon: "distributed-network",
      prefix: "distributed-system/",
      collapsible: true,
      children: [
        {
          text: "理论&算法&协议",
          icon: "suanfaku",
          prefix: "theorem&algorithm&protocol/",
          children: [
            "cap&base-theorem",
            "paxos-algorithm",
            "raft-algorithm",
            "gossip-protocl",
          ],
        },
        "api-gateway",
        "distributed-id",
        "distributed-lock",
        "distributed-transaction",
        "distributed-configuration-center",
        {
          text: "RPC（远程调用）详解",
          prefix: "rpc/",
          icon: "network",
          collapsible: true,
          children: ["rpc-intro", "dubbo"],
        },
        {
          text: "ZooKeeper 详解",
          icon: "framework",
          prefix: "distributed-process-coordination/",
          collapsible: true,
          children: [
            "zookeeper/zookeeper-intro",
            "zookeeper/zookeeper-plus",
            "zookeeper/zookeeper-in-action",
          ],
        },
      ],
    },
    {
      text: "高性能",
      icon: "et-performance",
      prefix: "high-performance/",
      collapsible: true,
      children: [
        "read-and-write-separation-and-library-subtable",
        "load-balancing",
        "cdn",
        "sql-optimization",
        {
          text: "消息队列",
          prefix: "message-queue/",
          icon: "MQ",
          collapsible: true,
          children: [
            "message-queue",
            "kafka-questions-01",
            "rocketmq-intro",
            "rocketmq-questions",
            "rabbitmq-intro",
            "rabbitmq-questions",
          ],
        },
      ],
    },
    {
      text: "高可用",
      icon: "highavailable",
      prefix: "high-availability/",
      collapsible: true,
      children: [
        "high-availability-system-design",
        "redundancy",
        "limit-request",
        "fallback&circuit-breaker",
        "timeout-and-retry",
        "performance-test",
      ],
    },
  ],
});
