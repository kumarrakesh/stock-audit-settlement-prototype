/* Session-02 prototype seed — Foodbridge Module Settlement (discovery).
   A window global (not fetched) so the prototype opens directly from file:// with no server,
   which browsers block for fetch() of local files. Single source of truth for the demo data.
   Disposable (R5); never imported by development/. See README.md for the locked counting model. */
window.SEED_DATA = {
  "_comment": "Fake but representative seed for the session-02 design-vision prototype (discovery/instructions/inputs/session-02/*.png). HTML-only, disposable (R5); never imported by development/. Reproduces the session-02 mockups faithfully — FG/RM/Asset entity axis, the 7-status vocabulary, and variance = extra − missing (negative = shortfall). NOTE: that variance sign is the OPPOSITE of ratified v1 (discovery Addendum 013, positive = shortfall); reproduced deliberately for user testing, to be reconciled in a later ceremony, not silently 'fixed' here. Counting-row numbers are hand-tuned to be internally consistent under the model documented in app.js computeRow(); the mockups' own per-row numbers are illustrative and do not fully compose.",

  "currentUser": { "id": "U-APP", "name": "Amit Singh", "role": "Approver", "initials": "AS" },
  "counterUser": { "id": "U-1", "name": "Rahul Sharma", "role": "Auditor", "initials": "RS" },

  "warehouses": [
    { "id": "WH-01", "name": "Mumbai DC" },
    { "id": "WH-02", "name": "Pune Warehouse" },
    { "id": "WH-03", "name": "Delhi Warehouse" },
    { "id": "WH-04", "name": "Bangalore DC" },
    { "id": "WH-05", "name": "Hyderabad WH" }
  ],

  "entities": [
    { "id": "FG", "name": "Finished Goods" },
    { "id": "RM", "name": "Raw Material" },
    { "id": "Asset", "name": "Asset" }
  ],

  "users": [
    { "id": "U-1", "name": "Rahul Sharma", "role": "Auditor" },
    { "id": "U-2", "name": "Neha Patel", "role": "Auditor" },
    { "id": "U-3", "name": "Imran Khan", "role": "Auditor" },
    { "id": "U-4", "name": "Vikram Singh", "role": "Auditor" },
    { "id": "U-5", "name": "Sonal Mehta", "role": "Auditor" },
    { "id": "U-6", "name": "Amit Yadav", "role": "Auditor" },
    { "id": "U-APP", "name": "Amit Singh", "role": "Approver" }
  ],

  "audits": [
    {
      "id": "AUD-2405-012", "name": "Monthly Stock Audit - May 2024", "warehouseId": "WH-01",
      "entity": "FG", "auditorUserId": "U-1", "status": "in_progress",
      "createdAt": "2024-05-30T09:00:00+05:30", "updatedAt": "2024-05-30T10:30:00+05:30",
      "submittedAt": null, "auditDate": "2024-05-30",
      "products": [
        { "productId": "P-01", "name": "Milk Pouch 500ml", "sku": "MILK-500", "batchNo": "B240527-01", "location": "A-01-01", "expected": 500, "actual": 470, "expired": 10, "waste": 5, "extra": 0 },
        { "productId": "P-02", "name": "Paneer 200g", "sku": "PNR-200", "batchNo": "B240528-02", "location": "A-01-02", "expected": 300, "actual": 310, "expired": 0, "waste": 0, "extra": 10 },
        { "productId": "P-03", "name": "Curd 400g", "sku": "CRD-400", "batchNo": "B240527-03", "location": "A-02-01", "expected": 200, "actual": 175, "expired": 3, "waste": 2, "extra": 0 },
        { "productId": "P-04", "name": "Ghee 500ml", "sku": "GHEE-500", "batchNo": "B240525-01", "location": "A-02-02", "expected": 150, "actual": 150, "expired": 0, "waste": 0, "extra": 0 },
        { "productId": "P-05", "name": "Butter 100g", "sku": "BUT-100", "batchNo": "B240528-01", "location": "B-01-01", "expected": 250, "actual": null, "expired": null, "waste": null, "extra": null },
        { "productId": "P-06", "name": "Cheese Block 1kg", "sku": "CHZ-1KG", "batchNo": "B240523-02", "location": "B-01-02", "expected": 100, "actual": null, "expired": null, "waste": null, "extra": null },
        { "productId": "P-07", "name": "Lassi 200ml", "sku": "LAS-200", "batchNo": "B240526-01", "location": "B-02-01", "expected": 400, "actual": 400, "expired": 0, "waste": 0, "extra": 0 },
        { "productId": "P-08", "name": "Buttermilk 500ml", "sku": "BTM-500", "batchNo": "B240526-03", "location": "B-02-02", "expected": 350, "actual": 340, "expired": 0, "waste": 5, "extra": 0 },
        { "productId": "P-09", "name": "Flavoured Milk 180ml", "sku": "FLM-180", "batchNo": "B240524-01", "location": "C-01-01", "expected": 600, "actual": 590, "expired": 0, "waste": 0, "extra": 10 },
        { "productId": "P-10", "name": "Khoa 250g", "sku": "KHO-250", "batchNo": "B240522-02", "location": "C-01-02", "expected": 120, "actual": null, "expired": null, "waste": null, "extra": null },
        { "productId": "P-11", "name": "Cream 200ml", "sku": "CRM-200", "batchNo": "B240527-04", "location": "C-02-01", "expected": 180, "actual": 180, "expired": 0, "waste": 0, "extra": 0 },
        { "productId": "P-12", "name": "Yoghurt 400g", "sku": "YOG-400", "batchNo": "B240528-05", "location": "C-02-02", "expected": 220, "actual": 210, "expired": 5, "waste": 0, "extra": 0 },
        { "productId": "P-13", "name": "Milk Powder 1kg", "sku": "MLKP-1KG", "batchNo": "B240519-01", "location": "D-01-01", "expected": 90, "actual": null, "expired": null, "waste": null, "extra": null },
        { "productId": "P-14", "name": "Condensed Milk 400g", "sku": "CND-400", "batchNo": "B240521-03", "location": "D-01-02", "expected": 160, "actual": 160, "expired": 0, "waste": 0, "extra": 0 }
      ]
    },
    { "id": "AUD-2405-011", "name": "Raw Material Audit - May", "warehouseId": "WH-02", "entity": "RM", "auditorUserId": "U-2", "status": "draft", "createdAt": "2024-05-30T09:00:00+05:30", "updatedAt": "2024-05-30T09:15:00+05:30", "submittedAt": null, "progress": 20, "countedTotal": 38, "productTotal": 192, "products": [] },
    { "id": "AUD-2405-010", "name": "Asset Verification - May", "warehouseId": "WH-03", "entity": "Asset", "auditorUserId": "U-3", "status": "submitted", "createdAt": "2024-05-29T09:00:00+05:30", "updatedAt": "2024-05-29T17:30:00+05:30", "submittedAt": "2024-05-29T17:30:00+05:30", "progress": 100, "countedTotal": 210, "productTotal": 210, "products": [] },
    { "id": "AUD-2405-009", "name": "Weekly FG Audit - May W4", "warehouseId": "WH-04", "entity": "FG", "auditorUserId": "U-4", "status": "under_review", "createdAt": "2024-05-29T09:00:00+05:30", "updatedAt": "2024-05-29T16:10:00+05:30", "submittedAt": "2024-05-29T15:20:00+05:30", "progress": 100, "countedTotal": 156, "productTotal": 156, "products": [] },
    { "id": "AUD-2405-008", "name": "RM Audit - May W3", "warehouseId": "WH-05", "entity": "RM", "auditorUserId": "U-5", "status": "approved", "createdAt": "2024-05-28T09:00:00+05:30", "updatedAt": "2024-05-28T14:30:00+05:30", "submittedAt": "2024-05-28T11:10:00+05:30", "progress": 100, "countedTotal": 342, "productTotal": 342, "products": [] },
    { "id": "AUD-2405-007", "name": "Asset Audit - May W3", "warehouseId": "WH-01", "entity": "Asset", "auditorUserId": "U-6", "status": "closed", "createdAt": "2024-05-27T09:00:00+05:30", "updatedAt": "2024-05-27T17:15:00+05:30", "submittedAt": "2024-05-27T16:00:00+05:30", "progress": 100, "countedTotal": 95, "productTotal": 95, "products": [] },
    { "id": "AUD-2405-006", "name": "FG Audit - May W2", "warehouseId": "WH-02", "entity": "FG", "auditorUserId": "U-1", "status": "submitted", "createdAt": "2024-05-27T09:00:00+05:30", "updatedAt": "2024-05-27T10:05:00+05:30", "submittedAt": "2024-05-27T10:05:00+05:30", "progress": 100, "countedTotal": 210, "productTotal": 210, "products": [] },
    { "id": "AUD-2405-005", "name": "RM Audit - May W2", "warehouseId": "WH-03", "entity": "RM", "auditorUserId": "U-2", "status": "cancelled", "createdAt": "2024-05-26T09:00:00+05:30", "updatedAt": "2024-05-26T11:20:00+05:30", "submittedAt": null, "progress": 0, "countedTotal": 0, "productTotal": 180, "products": [] },
    { "id": "AUD-2405-004", "name": "Weekly FG Audit - May W2", "warehouseId": "WH-04", "entity": "FG", "auditorUserId": "U-4", "status": "in_progress", "createdAt": "2024-05-26T09:00:00+05:30", "updatedAt": "2024-05-26T13:40:00+05:30", "submittedAt": null, "progress": 62, "countedTotal": 120, "productTotal": 194, "products": [] },
    { "id": "AUD-2405-003", "name": "Cold Storage Audit - May", "warehouseId": "WH-05", "entity": "FG", "auditorUserId": "U-5", "status": "under_review", "createdAt": "2024-05-25T09:00:00+05:30", "updatedAt": "2024-05-25T18:05:00+05:30", "submittedAt": "2024-05-25T17:00:00+05:30", "progress": 100, "countedTotal": 88, "productTotal": 88, "products": [] },
    { "id": "AUD-2405-002", "name": "Packaging RM Audit - May", "warehouseId": "WH-01", "entity": "RM", "auditorUserId": "U-6", "status": "draft", "createdAt": "2024-05-24T09:00:00+05:30", "updatedAt": "2024-05-24T09:50:00+05:30", "submittedAt": null, "progress": 5, "countedTotal": 9, "productTotal": 176, "products": [] },
    { "id": "AUD-2405-001", "name": "Equipment Asset Audit - May", "warehouseId": "WH-02", "entity": "Asset", "auditorUserId": "U-3", "status": "approved", "createdAt": "2024-05-23T09:00:00+05:30", "updatedAt": "2024-05-23T16:20:00+05:30", "submittedAt": "2024-05-23T14:00:00+05:30", "progress": 100, "countedTotal": 64, "productTotal": 64, "products": [] },
    { "id": "AUD-2404-020", "name": "Monthly Stock Audit - Apr", "warehouseId": "WH-01", "entity": "FG", "auditorUserId": "U-1", "status": "in_progress", "createdAt": "2024-05-22T09:00:00+05:30", "updatedAt": "2024-05-22T12:00:00+05:30", "submittedAt": null, "progress": 44, "countedTotal": 84, "productTotal": 192, "products": [] },
    { "id": "AUD-2404-019", "name": "RM Audit - Apr W4", "warehouseId": "WH-03", "entity": "RM", "auditorUserId": "U-2", "status": "submitted", "createdAt": "2024-05-21T09:00:00+05:30", "updatedAt": "2024-05-21T15:30:00+05:30", "submittedAt": "2024-05-21T15:30:00+05:30", "progress": 100, "countedTotal": 240, "productTotal": 240, "products": [] },
    { "id": "AUD-2404-018", "name": "Asset Verification - Apr", "warehouseId": "WH-04", "entity": "Asset", "auditorUserId": "U-4", "status": "draft", "createdAt": "2024-05-20T09:00:00+05:30", "updatedAt": "2024-05-20T10:10:00+05:30", "submittedAt": null, "progress": 12, "countedTotal": 14, "productTotal": 120, "products": [] },
    { "id": "AUD-2404-017", "name": "Weekly FG Audit - Apr W3", "warehouseId": "WH-05", "entity": "FG", "auditorUserId": "U-5", "status": "in_progress", "createdAt": "2024-05-19T09:00:00+05:30", "updatedAt": "2024-05-19T14:25:00+05:30", "submittedAt": null, "progress": 73, "countedTotal": 140, "productTotal": 192, "products": [] }
  ],

  "settlements": [
    { "id": "SET-2405-008", "auditId": "AUD-2405-008", "warehouseId": "WH-05", "entity": "RM", "submittedAt": "2024-05-29T11:20:00+05:30", "priority": "high", "status": "under_review" },
    { "id": "SET-2405-007", "auditId": "AUD-2405-009", "warehouseId": "WH-04", "entity": "FG", "submittedAt": "2024-05-29T10:05:00+05:30", "priority": "medium", "status": "under_review" },
    { "id": "SET-2405-006", "auditId": "AUD-2405-010", "warehouseId": "WH-03", "entity": "Asset", "submittedAt": "2024-05-28T16:45:00+05:30", "priority": "medium", "status": "pending_review" },
    { "id": "SET-2405-005", "auditId": "AUD-2405-006", "warehouseId": "WH-02", "entity": "FG", "submittedAt": "2024-05-28T15:10:00+05:30", "priority": "low", "status": "pending_review" },
    { "id": "SET-2405-004", "auditId": "AUD-2404-019", "warehouseId": "WH-03", "entity": "RM", "submittedAt": "2024-05-28T12:30:00+05:30", "priority": "medium", "status": "pending_review" },
    { "id": "SET-2405-003", "auditId": "AUD-2405-003", "warehouseId": "WH-05", "entity": "FG", "submittedAt": "2024-05-25T18:20:00+05:30", "priority": "high", "status": "pending_review" },
    { "id": "SET-2405-002", "auditId": "AUD-2405-001", "warehouseId": "WH-02", "entity": "Asset", "submittedAt": "2024-05-23T14:30:00+05:30", "priority": "low", "status": "approved" },
    { "id": "SET-2405-001", "auditId": "AUD-2404-017", "warehouseId": "WH-05", "entity": "FG", "submittedAt": "2024-05-19T15:00:00+05:30", "priority": "medium", "status": "pending_review" }
  ],

  "actionTickets": [
    { "id": "AT-2405-015", "auditId": "AUD-2405-008", "warehouseId": "WH-05", "title": "Investigate repeated RM shortfall", "status": "open", "priority": "high", "assignedToUserId": "U-5" },
    { "id": "AT-2405-014", "auditId": "AUD-2405-009", "warehouseId": "WH-04", "title": "Verify cold-chain breach batch", "status": "open", "priority": "high", "assignedToUserId": "U-4" },
    { "id": "AT-2405-013", "auditId": "AUD-2405-010", "warehouseId": "WH-03", "title": "Reconcile asset tags", "status": "in_progress", "priority": "medium", "assignedToUserId": "U-3" },
    { "id": "AT-2405-012", "auditId": "AUD-2405-006", "warehouseId": "WH-02", "title": "Confirm inbound miscount", "status": "in_progress", "priority": "medium", "assignedToUserId": "U-1" },
    { "id": "AT-2405-011", "auditId": "AUD-2404-019", "warehouseId": "WH-03", "title": "Packaging spillage follow-up", "status": "open", "priority": "low", "assignedToUserId": "U-2" },
    { "id": "AT-2405-010", "auditId": "AUD-2405-003", "warehouseId": "WH-05", "title": "Chiller-3 waste root cause", "status": "open", "priority": "high", "assignedToUserId": "U-5" },
    { "id": "AT-2405-009", "auditId": "AUD-2405-001", "warehouseId": "WH-02", "title": "Forklift asset location mismatch", "status": "resolved", "priority": "low", "assignedToUserId": "U-3" },
    { "id": "AT-2405-008", "auditId": "AUD-2404-017", "warehouseId": "WH-05", "title": "Expiry sweep — flavoured milk", "status": "open", "priority": "medium", "assignedToUserId": "U-5" }
  ],

  "snapshots": [
    { "id": "SNAP-0011", "warehouseId": "WH-01", "entity": "FG", "stockTotalCount": 8420, "approverUser": "Amit Singh", "datetime": "2024-05-28T18:00:00+05:30" },
    { "id": "SNAP-0010", "warehouseId": "WH-05", "entity": "RM", "stockTotalCount": 5210, "approverUser": "Amit Singh", "datetime": "2024-05-27T17:30:00+05:30" },
    { "id": "SNAP-0009", "warehouseId": "WH-02", "entity": "Asset", "stockTotalCount": 640, "approverUser": "Amit Singh", "datetime": "2024-05-23T16:45:00+05:30" },
    { "id": "SNAP-0008", "warehouseId": "WH-03", "entity": "RM", "stockTotalCount": 3120, "approverUser": "Amit Singh", "datetime": "2024-05-21T16:00:00+05:30" },
    { "id": "SNAP-0007", "warehouseId": "WH-04", "entity": "FG", "stockTotalCount": 2980, "approverUser": "Amit Singh", "datetime": "2024-05-18T15:20:00+05:30" },
    { "id": "SNAP-0006", "warehouseId": "WH-01", "entity": "FG", "stockTotalCount": 8110, "approverUser": "Amit Singh", "datetime": "2024-05-15T18:00:00+05:30" }
  ],

  "dashboard": {
    "completedThisMonth": 48,
    "snapshotsThisMonth": 6,
    "varianceSummary": { "missing": 1620, "extra": 210, "waste": 900, "expired": 260, "totalVariance": -1248 },
    "trend": [
      { "date": "01 May", "missing": -520, "extra": 180, "waste": -120, "expired": 260 },
      { "date": "06 May", "missing": -640, "extra": 150, "waste": -140, "expired": 320 },
      { "date": "11 May", "missing": -480, "extra": 200, "waste": -110, "expired": 180 },
      { "date": "16 May", "missing": -900, "extra": 170, "waste": -130, "expired": 240 },
      { "date": "21 May", "missing": -760, "extra": 210, "waste": -120, "expired": 150 },
      { "date": "26 May", "missing": -1180, "extra": 160, "waste": -150, "expired": 200 },
      { "date": "31 May", "missing": -1620, "extra": 210, "waste": -140, "expired": 130 }
    ]
  }
};
