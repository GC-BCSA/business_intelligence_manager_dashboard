window.__GANTT_CSV__ = `Task,Group,Assignee,Start,End,Progress,Dependencies,Color
Project Charter,Initiation,Alice,2024-01-03,2024-01-12,100,,#4CAF50
Stakeholder Analysis,Initiation,Bob,2024-01-08,2024-01-19,100,,#4CAF50
Feasibility Study,Initiation,Charlie,2024-01-15,2024-02-02,100,Project Charter,#4CAF50
Budget Approval,Initiation,Diana,2024-02-01,2024-02-16,100,Feasibility Study,#4CAF50
Risk Assessment,Initiation,Edward,2024-02-05,2024-02-23,100,Stakeholder Analysis,#4CAF50
Vendor Evaluation,Initiation,Fiona,2024-02-12,2024-03-01,100,,#4CAF50
Compliance Review,Initiation,George,2024-02-19,2024-03-08,100,Risk Assessment,#4CAF50
Kick-off Meeting,Initiation,Alice,2024-03-04,2024-03-06,100,Budget Approval;Compliance Review,#4CAF50
Requirements Workshops,Requirements,Bob,2024-03-07,2024-03-28,100,Kick-off Meeting,#2196F3
Business Process Mapping,Requirements,Charlie,2024-03-11,2024-04-05,100,,#2196F3
Functional Requirements Doc,Requirements,Diana,2024-03-25,2024-04-18,100,Requirements Workshops,#2196F3
Non-Functional Requirements,Requirements,Edward,2024-04-01,2024-04-19,100,,#2196F3
Data Requirements Analysis,Requirements,Fiona,2024-04-08,2024-04-26,100,Business Process Mapping,#2196F3
Integration Requirements,Requirements,George,2024-04-15,2024-05-03,100,,#2196F3
Security Requirements,Requirements,Hannah,2024-04-22,2024-05-10,100,Non-Functional Requirements,#2196F3
Requirements Sign-off,Requirements,Alice,2024-05-06,2024-05-10,100,Functional Requirements Doc;Security Requirements,#2196F3
User Personas,Requirements,Bob,2024-04-01,2024-04-12,100,,#2196F3
Acceptance Criteria Definition,Requirements,Charlie,2024-05-01,2024-05-15,100,Functional Requirements Doc,#2196F3
System Architecture Design,Architecture,Charlie,2024-05-12,2024-06-14,100,Requirements Sign-off,#FF9800
Database Architecture,Architecture,Edward,2024-05-19,2024-06-20,100,,#FF9800
API Design,Architecture,Fiona,2024-05-26,2024-06-27,100,System Architecture Design,#FF9800
Security Architecture,Architecture,George,2024-06-03,2024-07-05,100,,#FF9800
Cloud Infrastructure Design,Architecture,Hannah,2024-06-10,2024-07-12,100,System Architecture Design,#FF9800
Network Topology Design,Architecture,Alice,2024-06-17,2024-07-12,100,,#FF9800
Disaster Recovery Planning,Architecture,Bob,2024-06-24,2024-07-19,100,Cloud Infrastructure Design,#FF9800
Architecture Review Board,Architecture,Charlie,2024-07-15,2024-07-19,100,API Design;Security Architecture,#FF9800
Scalability Assessment,Architecture,Diana,2024-07-01,2024-07-18,100,,#FF9800
Technology Stack Finalization,Architecture,Edward,2024-07-08,2024-07-19,100,Architecture Review Board,#FF9800
UI/UX Research,Design,Diana,2024-07-22,2024-08-16,100,Architecture Review Board,#9C27B0
Wireframe Creation,Design,Bob,2024-08-05,2024-08-30,100,UI/UX Research,#9C27B0
Visual Design System,Design,Diana,2024-08-19,2024-09-20,100,Wireframe Creation,#9C27B0
Prototype Development,Design,Fiona,2024-09-02,2024-10-04,100,Visual Design System,#9C27B0
Usability Testing Round 1,Design,Hannah,2024-09-23,2024-10-11,100,Prototype Development,#9C27B0
Design Iteration,Design,Diana,2024-10-07,2024-10-25,100,Usability Testing Round 1,#9C27B0
Usability Testing Round 2,Design,Hannah,2024-10-21,2024-11-01,100,Design Iteration,#9C27B0
Accessibility Audit,Design,George,2024-10-14,2024-11-01,100,,#9C27B0
Design Handoff,Design,Diana,2024-11-04,2024-11-08,100,Usability Testing Round 2;Accessibility Audit,#9C27B0
Icon and Asset Library,Design,Bob,2024-09-16,2024-10-11,100,,#9C27B0
Style Guide Documentation,Design,Alice,2024-10-14,2024-10-31,100,Visual Design System,#9C27B0
Responsive Layout Specs,Design,Fiona,2024-10-21,2024-11-08,100,,#9C27B0
Dev Environment Setup,Development,Charlie,2024-11-04,2024-11-15,100,Design Handoff,#F44336
CI/CD Pipeline Setup,Development,Edward,2024-11-11,2024-11-29,100,,#F44336
Core Framework Build,Development,Fiona,2024-11-18,2024-12-20,100,Dev Environment Setup,#F44336
User Auth Module,Development,George,2024-12-02,2024-12-27,100,Core Framework Build,#F44336
Role-Based Access Control,Development,Hannah,2024-12-09,2025-01-10,100,User Auth Module,#F44336
Dashboard Module,Development,Alice,2024-12-16,2025-01-24,100,Core Framework Build,#F44336
Search Engine Integration,Development,Bob,2025-01-06,2025-02-07,95,Core Framework Build,#F44336
Notification System,Development,Charlie,2025-01-13,2025-02-14,95,,#F44336
File Management System,Development,Diana,2025-01-20,2025-02-21,90,Core Framework Build,#F44336
Reporting Module,Development,Edward,2025-01-27,2025-03-07,90,,#F44336
Data Import/Export,Development,Fiona,2025-02-10,2025-03-14,85,File Management System,#F44336
Workflow Engine,Development,George,2025-02-17,2025-03-28,85,,#F44336
API Gateway Implementation,Development,Hannah,2025-02-24,2025-03-28,80,API Design,#F44336
Payment Processing Module,Development,Alice,2025-03-03,2025-04-11,80,,#F44336
Email Service Integration,Development,Bob,2025-03-10,2025-04-11,75,Notification System,#F44336
Audit Logging System,Development,Charlie,2025-03-17,2025-04-18,75,,#F44336
Caching Layer,Development,Diana,2025-03-24,2025-04-18,70,API Gateway Implementation,#F44336
Real-time Messaging,Development,Edward,2025-03-31,2025-05-02,70,,#F44336
Batch Processing Engine,Development,Fiona,2025-04-07,2025-05-09,65,,#F44336
Multi-tenancy Support,Development,George,2025-04-14,2025-05-23,60,Core Framework Build,#F44336
Localization Framework,Development,Hannah,2025-04-21,2025-05-23,55,,#F44336
Third-party API Connectors,Development,Alice,2025-04-28,2025-05-30,50,,#F44336
Analytics Dashboard,Development,Bob,2025-05-05,2025-06-06,45,Reporting Module,#F44336
Admin Control Panel,Development,Charlie,2025-05-12,2025-06-13,40,Role-Based Access Control,#F44336
Mobile Responsive Views,Development,Diana,2025-05-19,2025-06-20,35,Responsive Layout Specs,#F44336
SSO Integration,Development,Edward,2025-05-26,2025-06-20,30,User Auth Module,#F44336
Webhook System,Development,Fiona,2025-06-02,2025-06-27,25,,#F44336
Data Archival System,Development,George,2025-06-09,2025-07-04,20,,#F44336
Configuration Management,Development,Hannah,2025-06-16,2025-07-11,15,,#F44336
Unit Test - Auth,Testing,George,2025-03-03,2025-03-21,85,,#00BCD4
Unit Test - Dashboard,Testing,Hannah,2025-03-10,2025-03-28,80,,#00BCD4
Unit Test - Search,Testing,Alice,2025-03-17,2025-04-04,75,Search Engine Integration,#00BCD4
Unit Test - Notifications,Testing,Bob,2025-03-24,2025-04-11,70,,#00BCD4
Unit Test - File Mgmt,Testing,Charlie,2025-03-31,2025-04-18,65,File Management System,#00BCD4
Unit Test - Reporting,Testing,Diana,2025-04-07,2025-04-25,60,,#00BCD4
Unit Test - Workflow,Testing,Edward,2025-04-21,2025-05-09,50,Workflow Engine,#00BCD4
Unit Test - Payments,Testing,Fiona,2025-04-28,2025-05-16,45,,#00BCD4
Integration Test Phase 1,Testing,George,2025-05-19,2025-06-13,35,,#00BCD4
Integration Test Phase 2,Testing,Hannah,2025-06-16,2025-07-11,20,,#00BCD4
Integration Test Phase 3,Testing,Alice,2025-07-14,2025-08-08,10,,#00BCD4
Performance Load Testing,Testing,Bob,2025-07-21,2025-08-15,5,,#00BCD4
Security Penetration Test,Testing,Charlie,2025-08-04,2025-08-29,0,,#00BCD4
Stress Testing,Testing,Diana,2025-08-18,2025-09-12,0,Performance Load Testing,#00BCD4
Regression Test Suite,Testing,Edward,2025-09-01,2025-09-26,0,,#00BCD4
Cross-browser Testing,Testing,Fiona,2025-09-08,2025-09-26,0,,#00BCD4
Mobile Device Testing,Testing,George,2025-09-15,2025-10-03,0,Mobile Responsive Views,#00BCD4
Accessibility Testing,Testing,Hannah,2025-09-22,2025-10-10,0,Accessibility Audit,#00BCD4
End-to-End Test Automation,Testing,Alice,2025-09-29,2025-10-24,0,,#00BCD4
UAT Planning,Testing,Bob,2025-10-06,2025-10-17,0,,#00BCD4
UAT Execution Round 1,Testing,Charlie,2025-10-20,2025-11-07,0,UAT Planning,#00BCD4
UAT Execution Round 2,Testing,Diana,2025-11-10,2025-11-28,0,UAT Execution Round 1,#00BCD4
UAT Sign-off,Testing,Edward,2025-12-01,2025-12-05,0,UAT Execution Round 2,#00BCD4
Data Migration Strategy,Data Migration,Edward,2025-06-02,2025-06-27,25,,#FF5722
Legacy Data Audit,Data Migration,Fiona,2025-06-16,2025-07-11,20,,#FF5722
Data Mapping Document,Data Migration,George,2025-07-07,2025-07-25,10,Legacy Data Audit,#FF5722
ETL Pipeline Development,Data Migration,Hannah,2025-07-21,2025-08-22,5,Data Mapping Document,#FF5722
Migration Script Dev,Data Migration,Alice,2025-08-04,2025-09-05,0,ETL Pipeline Development,#FF5722
Test Migration Run 1,Data Migration,Bob,2025-09-08,2025-09-26,0,Migration Script Dev,#FF5722
Test Migration Run 2,Data Migration,Charlie,2025-09-29,2025-10-17,0,Test Migration Run 1,#FF5722
Data Validation Scripts,Data Migration,Diana,2025-10-06,2025-10-24,0,,#FF5722
Migration Dry Run,Data Migration,Edward,2025-10-20,2025-11-07,0,Test Migration Run 2;Data Validation Scripts,#FF5722
Production Data Migration,Data Migration,Fiona,2025-11-17,2025-11-28,0,Migration Dry Run,#FF5722
Post-Migration Validation,Data Migration,George,2025-12-01,2025-12-12,0,Production Data Migration,#FF5722
Data Reconciliation Report,Data Migration,Hannah,2025-12-08,2025-12-19,0,Post-Migration Validation,#FF5722
Training Material Design,Training,Bob,2025-08-04,2025-08-29,0,,#607D8B
Admin User Guide,Training,Diana,2025-08-18,2025-09-12,0,,#607D8B
End User Guide,Training,Fiona,2025-09-01,2025-09-26,0,,#607D8B
Video Tutorial Production,Training,Hannah,2025-09-15,2025-10-17,0,,#607D8B
Interactive Walkthrough Dev,Training,Alice,2025-10-06,2025-10-31,0,,#607D8B
Train-the-Trainer Sessions,Training,Charlie,2025-11-03,2025-11-14,0,Training Material Design,#607D8B
Pilot User Training,Training,Edward,2025-11-17,2025-12-05,0,Train-the-Trainer Sessions,#607D8B
Company-wide Training Wave 1,Training,George,2025-12-08,2026-01-09,0,Pilot User Training,#607D8B
Company-wide Training Wave 2,Training,Bob,2026-01-12,2026-02-06,0,Company-wide Training Wave 1,#607D8B
Advanced User Workshops,Training,Diana,2026-02-09,2026-02-27,0,,#607D8B
Certification Program Setup,Training,Fiona,2026-02-16,2026-03-06,0,,#607D8B
FAQ and Knowledge Base,Training,Hannah,2025-10-20,2025-11-14,0,,#607D8B
Staging Environment Build,Deployment,Hannah,2025-10-13,2025-10-31,0,,#795548
Production Environment Build,Deployment,Alice,2025-11-03,2025-11-21,0,Staging Environment Build,#795548
DNS and SSL Configuration,Deployment,Charlie,2025-11-10,2025-11-21,0,,#795548
Load Balancer Setup,Deployment,Edward,2025-11-17,2025-11-28,0,Production Environment Build,#795548
Monitoring and Alerting,Deployment,George,2025-11-24,2025-12-12,0,,#795548
Blue-Green Deploy Config,Deployment,Bob,2025-12-01,2025-12-12,0,Production Environment Build,#795548
Staging Deployment,Deployment,Diana,2025-12-08,2025-12-12,0,UAT Sign-off,#795548
Pre-production Smoke Test,Deployment,Fiona,2025-12-15,2025-12-19,0,Staging Deployment,#795548
Production Deployment Wave 1,Deployment,Hannah,2026-01-05,2026-01-09,0,Pre-production Smoke Test;Production Data Migration,#795548
Production Smoke Test,Deployment,Alice,2026-01-12,2026-01-14,0,Production Deployment Wave 1,#795548
Production Deployment Wave 2,Deployment,Charlie,2026-01-19,2026-01-23,0,Production Smoke Test,#795548
Rollback Plan Verification,Deployment,Edward,2026-01-12,2026-01-16,0,,#795548
CDN Configuration,Deployment,George,2026-01-19,2026-01-23,0,,#795548
Go-Live Announcement,Deployment,Bob,2026-01-26,2026-01-28,0,Production Deployment Wave 2,#795548
Bug Triage Process Setup,Post-Launch,Alice,2026-01-26,2026-02-06,0,Go-Live Announcement,#E91E63
Critical Bug Fixes Sprint 1,Post-Launch,Charlie,2026-02-02,2026-02-20,0,Bug Triage Process Setup,#E91E63
Critical Bug Fixes Sprint 2,Post-Launch,Edward,2026-02-23,2026-03-13,0,Critical Bug Fixes Sprint 1,#E91E63
Performance Optimization,Post-Launch,George,2026-02-16,2026-03-13,0,,#E91E63
User Feedback Collection,Post-Launch,Bob,2026-02-02,2026-03-06,0,Go-Live Announcement,#E91E63
Feature Enhancement Plan,Post-Launch,Diana,2026-03-09,2026-03-27,0,User Feedback Collection,#E91E63
Patch Release 1.1,Post-Launch,Fiona,2026-03-16,2026-04-03,0,Critical Bug Fixes Sprint 2,#E91E63
Scaling Review,Post-Launch,Hannah,2026-03-23,2026-04-10,0,Performance Optimization,#E91E63
Patch Release 1.2,Post-Launch,Alice,2026-04-13,2026-05-01,0,Patch Release 1.1,#E91E63
Feature Release 2.0 Planning,Post-Launch,Charlie,2026-04-20,2026-05-08,0,Feature Enhancement Plan,#E91E63
Feature Release 2.0 Dev,Post-Launch,Edward,2026-05-11,2026-06-19,0,Feature Release 2.0 Planning,#E91E63
Feature Release 2.0 Test,Post-Launch,George,2026-06-22,2026-07-17,0,Feature Release 2.0 Dev,#E91E63
Feature Release 2.0 Deploy,Post-Launch,Bob,2026-07-20,2026-07-31,0,Feature Release 2.0 Test,#E91E63
SLA Monitoring Setup,Post-Launch,Diana,2026-03-02,2026-03-20,0,,#E91E63
Incident Response Drills,Post-Launch,Fiona,2026-04-06,2026-04-17,0,,#E91E63
Quarterly Security Review,Post-Launch,Hannah,2026-04-20,2026-05-08,0,,#E91E63
Annual Compliance Audit,Post-Launch,Alice,2026-06-01,2026-06-26,0,,#E91E63
System Health Report Q3,Post-Launch,Charlie,2026-07-06,2026-07-17,0,,#E91E63
Feature Release 3.0 Planning,Post-Launch,Edward,2026-08-03,2026-08-21,0,Feature Release 2.0 Deploy,#E91E63
Feature Release 3.0 Dev,Post-Launch,George,2026-08-24,2026-10-16,0,Feature Release 3.0 Planning,#E91E63
Feature Release 3.0 Test,Post-Launch,Bob,2026-10-19,2026-11-13,0,Feature Release 3.0 Dev,#E91E63
Feature Release 3.0 Deploy,Post-Launch,Diana,2026-11-16,2026-11-27,0,Feature Release 3.0 Test,#E91E63
Year-End System Review,Post-Launch,Fiona,2026-12-01,2026-12-18,0,,#E91E63
API Documentation,Documentation,Alice,2025-05-05,2025-06-06,45,,#3F51B5
Architecture Decision Records,Documentation,Charlie,2024-05-19,2025-07-04,70,,#3F51B5
Runbook Creation,Documentation,Edward,2025-07-07,2025-08-01,10,,#3F51B5
Deployment Guide,Documentation,George,2025-08-04,2025-08-22,0,,#3F51B5
Troubleshooting Guide,Documentation,Bob,2025-08-18,2025-09-12,0,,#3F51B5
Change Management Log,Documentation,Diana,2024-03-07,2026-12-31,30,,#3F51B5
Release Notes Template,Documentation,Fiona,2025-09-01,2025-09-12,0,,#3F51B5
System Admin Guide,Documentation,Hannah,2025-09-15,2025-10-10,0,,#3F51B5
Compliance Documentation,Documentation,Alice,2025-10-06,2025-10-31,0,,#3F51B5
Final Project Report,Documentation,Charlie,2026-12-01,2026-12-31,0,,#3F51B5`;
