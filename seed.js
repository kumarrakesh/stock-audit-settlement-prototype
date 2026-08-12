/* Session-02 prototype seed — Foodbridge Module Settlement (discovery).
   A window global (not fetched) so the prototype opens directly from file:// with no server.
   Disposable (R5); never imported by development/. v1-aligned counting model (see app.js computeRow). */
window.SEED_DATA = {
  "_comment": "Fake but representative seed for the session-02 design-vision prototype. HTML-only, disposable (R5). Reproduces the session-02 mockups faithfully. NOTHING here is ratified — sensible prototype defaults for user testing only, subject to change. v1 model: Actual = verifiedOk+verifiedExpired+verifiedWaste+extra; Missing = max(Expected−Actual,0); Variance = Expected−Actual (positive = shortfall). Snapshot is intentionally NOT modelled as a screen: per human direction it runs in the background after settlement / on a configured interval — a later problem.",
  "currentUser": {
    "id": "U-APP",
    "name": "Amit Singh",
    "role": "Approver",
    "initials": "AS"
  },
  "counterUser": {
    "id": "U-1",
    "name": "Rahul Sharma",
    "role": "Auditor",
    "initials": "RS"
  },
  "warehouses": [
    {
      "id": "WH-01",
      "name": "Mumbai DC"
    },
    {
      "id": "WH-02",
      "name": "Pune Warehouse"
    },
    {
      "id": "WH-03",
      "name": "Delhi Warehouse"
    },
    {
      "id": "WH-04",
      "name": "Bangalore DC"
    },
    {
      "id": "WH-05",
      "name": "Hyderabad WH"
    }
  ],
  "entities": [
    {
      "id": "FG",
      "name": "Finished Goods"
    },
    {
      "id": "RM",
      "name": "Raw Material"
    },
    {
      "id": "Asset",
      "name": "Asset"
    }
  ],
  "users": [
    {
      "id": "U-1",
      "name": "Rahul Sharma",
      "role": "Auditor"
    },
    {
      "id": "U-2",
      "name": "Neha Patel",
      "role": "Auditor"
    },
    {
      "id": "U-3",
      "name": "Imran Khan",
      "role": "Auditor"
    },
    {
      "id": "U-4",
      "name": "Vikram Singh",
      "role": "Auditor"
    },
    {
      "id": "U-5",
      "name": "Sonal Mehta",
      "role": "Auditor"
    },
    {
      "id": "U-6",
      "name": "Amit Yadav",
      "role": "Auditor"
    },
    {
      "id": "U-APP",
      "name": "Amit Singh",
      "role": "Approver"
    },
    {
      "id": "U-APP2",
      "name": "Divya Menon",
      "role": "Approver"
    }
  ],
  "_resolutionComment": "Classification-driven resolution options (prototype default, mirrors ratified v1 shape but NOT re-ratified here). Options whose id is 'recovery' or 'split' can spawn a Recovery Action Ticket.",
  "resolutionOptions": {
    "MISSING": [
      {
        "id": "action_item",
        "label": "Create action item"
      },
      {
        "id": "write_off",
        "label": "Write off as loss"
      },
      {
        "id": "recovery",
        "label": "Recover from responsible party",
        "ticket": true
      },
      {
        "id": "split",
        "label": "Split — recover + write off",
        "ticket": true,
        "split": true
      }
    ],
    "WASTE": [
      {
        "id": "action_item",
        "label": "Create action item"
      },
      {
        "id": "write_off",
        "label": "Write off as loss"
      },
      {
        "id": "recovery",
        "label": "Recover from responsible party",
        "ticket": true
      },
      {
        "id": "split",
        "label": "Split — recover + write off",
        "ticket": true,
        "split": true
      }
    ],
    "EXPIRED": [
      {
        "id": "write_off",
        "label": "Write off as loss"
      },
      {
        "id": "recovery",
        "label": "Recover from seller",
        "ticket": true
      },
      {
        "id": "split",
        "label": "Split — recover + write off",
        "ticket": true,
        "split": true
      }
    ],
    "EXTRA": [
      {
        "id": "absorb",
        "label": "Absorb into stock"
      },
      {
        "id": "discard",
        "label": "Discard"
      },
      {
        "id": "return",
        "label": "Return to source",
        "ticket": true
      }
    ]
  },
  "audits": [
    {
      "id": "AUD-2405-012",
      "name": "Monthly Stock Audit - May 2024",
      "warehouseId": "WH-01",
      "entity": "FG",
      "auditorUserId": "U-1",
      "status": "in_progress",
      "createdAt": "2024-05-30T09:00:00+05:30",
      "updatedAt": "2024-05-30T10:30:00+05:30",
      "submittedAt": null,
      "auditDate": "2024-05-30",
      "products": [
        {
          "productId": "P-01",
          "name": "Milk Pouch 500ml",
          "sku": "MILK-500",
          "batchNo": "B240527-01",
          "location": "A-01-01",
          "expected": 500,
          "extra": 0,
          "verifiedOk": 470,
          "verifiedExpired": 10,
          "verifiedWaste": 5,
          "expiryDate": ""
        },
        {
          "productId": "P-02",
          "name": "Paneer 200g",
          "sku": "PNR-200",
          "batchNo": "B240528-02",
          "location": "A-01-02",
          "expected": 300,
          "extra": 10,
          "verifiedOk": 310,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-03",
          "name": "Curd 400g",
          "sku": "CRD-400",
          "batchNo": "B240527-03",
          "location": "A-02-01",
          "expected": 200,
          "extra": 0,
          "verifiedOk": 175,
          "verifiedExpired": 3,
          "verifiedWaste": 2,
          "expiryDate": ""
        },
        {
          "productId": "P-04",
          "name": "Ghee 500ml",
          "sku": "GHEE-500",
          "batchNo": "B240525-01",
          "location": "A-02-02",
          "expected": 150,
          "extra": 0,
          "verifiedOk": 150,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-05",
          "name": "Butter 100g",
          "sku": "BUT-100",
          "batchNo": "B240528-01",
          "location": "B-01-01",
          "expected": 250,
          "extra": null,
          "verifiedOk": null,
          "verifiedExpired": null,
          "verifiedWaste": null
        },
        {
          "productId": "P-06",
          "name": "Cheese Block 1kg",
          "sku": "CHZ-1KG",
          "batchNo": "B240523-02",
          "location": "B-01-02",
          "expected": 100,
          "extra": null,
          "verifiedOk": null,
          "verifiedExpired": null,
          "verifiedWaste": null
        },
        {
          "productId": "P-07",
          "name": "Lassi 200ml",
          "sku": "LAS-200",
          "batchNo": "B240526-01",
          "location": "B-02-01",
          "expected": 400,
          "extra": 0,
          "verifiedOk": 400,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-08",
          "name": "Buttermilk 500ml",
          "sku": "BTM-500",
          "batchNo": "B240526-03",
          "location": "B-02-02",
          "expected": 350,
          "extra": 0,
          "verifiedOk": 340,
          "verifiedExpired": 0,
          "verifiedWaste": 5,
          "expiryDate": ""
        },
        {
          "productId": "P-09",
          "name": "Flavoured Milk 180ml",
          "sku": "FLM-180",
          "batchNo": "B240524-01",
          "location": "C-01-01",
          "expected": 600,
          "extra": 10,
          "verifiedOk": 590,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-10",
          "name": "Khoa 250g",
          "sku": "KHO-250",
          "batchNo": "B240522-02",
          "location": "C-01-02",
          "expected": 120,
          "extra": null,
          "verifiedOk": null,
          "verifiedExpired": null,
          "verifiedWaste": null
        },
        {
          "productId": "P-11",
          "name": "Cream 200ml",
          "sku": "CRM-200",
          "batchNo": "B240527-04",
          "location": "C-02-01",
          "expected": 180,
          "extra": 0,
          "verifiedOk": 180,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-12",
          "name": "Yoghurt 400g",
          "sku": "YOG-400",
          "batchNo": "B240528-05",
          "location": "C-02-02",
          "expected": 220,
          "extra": 0,
          "verifiedOk": 210,
          "verifiedExpired": 5,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-13",
          "name": "Milk Powder 1kg",
          "sku": "MLKP-1KG",
          "batchNo": "B240519-01",
          "location": "D-01-01",
          "expected": 90,
          "extra": null,
          "verifiedOk": null,
          "verifiedExpired": null,
          "verifiedWaste": null
        },
        {
          "productId": "P-14",
          "name": "Condensed Milk 400g",
          "sku": "CND-400",
          "batchNo": "B240521-03",
          "location": "D-01-02",
          "expected": 160,
          "extra": 0,
          "verifiedOk": 160,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        }
      ]
    },
    {
      "id": "AUD-2405-010",
      "name": "Asset Verification - May",
      "warehouseId": "WH-03",
      "entity": "Asset",
      "auditorUserId": "U-3",
      "status": "submitted",
      "createdAt": "2024-05-29T09:00:00+05:30",
      "updatedAt": "2024-05-29T17:30:00+05:30",
      "submittedAt": "2024-05-29T17:30:00+05:30",
      "auditDate": "2024-05-29",
      "products": [
        {
          "productId": "A-01",
          "name": "Forklift FL-12",
          "sku": "AST-FL12",
          "batchNo": "—",
          "location": "BAY-03",
          "expected": 1,
          "extra": 0,
          "classification": "MISSING",
          "reasonNarrative": "Not found at bay 3; last seen logged 3 weeks ago.",
          "evidence": {
            "photos": [
              {
                "caption": "Empty bay 3"
              }
            ],
            "documents": []
          },
          "verifiedOk": 0,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "A-02",
          "name": "Pallet Jack PJ-3",
          "sku": "AST-PJ3",
          "batchNo": "—",
          "location": "BAY-05",
          "expected": 5,
          "extra": 0,
          "classification": "MISSING",
          "reasonNarrative": "One unit unaccounted for.",
          "evidence": {
            "photos": [],
            "documents": []
          },
          "verifiedOk": 4,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "A-03",
          "name": "Weighing Scale WS-7",
          "sku": "AST-WS7",
          "batchNo": "—",
          "location": "DOCK-01",
          "expected": 3,
          "extra": 0,
          "verifiedOk": 3,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        }
      ]
    },
    {
      "id": "AUD-2405-009",
      "name": "Weekly FG Audit - May W4",
      "warehouseId": "WH-04",
      "entity": "FG",
      "auditorUserId": "U-4",
      "status": "under_review",
      "createdAt": "2024-05-29T09:00:00+05:30",
      "updatedAt": "2024-05-29T16:10:00+05:30",
      "submittedAt": "2024-05-29T15:20:00+05:30",
      "auditDate": "2024-05-29",
      "products": [
        {
          "productId": "P-03",
          "name": "Curd 400g",
          "sku": "CRD-400",
          "batchNo": "B240521-08",
          "location": "CH-01",
          "expected": 200,
          "extra": 0,
          "classification": "WASTE",
          "reasonNarrative": "Chiller-2 temperature breach overnight; 15 units spoiled.",
          "evidence": {
            "photos": [
              {
                "caption": "Chiller temp log"
              },
              {
                "caption": "Spoiled stock"
              }
            ],
            "documents": [
              {
                "name": "chiller2_templog.pdf",
                "size": "220 KB"
              }
            ]
          },
          "verifiedOk": 180,
          "verifiedExpired": 0,
          "verifiedWaste": 15,
          "expiryDate": ""
        },
        {
          "productId": "P-01",
          "name": "Milk Pouch 500ml",
          "sku": "MILK-500",
          "batchNo": "B240522-02",
          "location": "CH-02",
          "expected": 500,
          "extra": 0,
          "classification": "MISSING",
          "reasonNarrative": "20 pouches unaccounted; suspected pilferage at dock.",
          "evidence": {
            "photos": [],
            "documents": []
          },
          "verifiedOk": 480,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-02",
          "name": "Paneer 200g",
          "sku": "PNR-200",
          "batchNo": "B240523-01",
          "location": "CH-03",
          "expected": 300,
          "extra": 12,
          "classification": "EXTRA",
          "reasonNarrative": "12 extra blocks found — likely miscounted inbound receipt.",
          "evidence": {
            "photos": [],
            "documents": []
          },
          "verifiedOk": 300,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        }
      ]
    },
    {
      "id": "AUD-2405-006",
      "name": "FG Audit - May W2",
      "warehouseId": "WH-02",
      "entity": "FG",
      "auditorUserId": "U-1",
      "status": "submitted",
      "createdAt": "2024-05-27T09:00:00+05:30",
      "updatedAt": "2024-05-27T10:05:00+05:30",
      "submittedAt": "2024-05-27T10:05:00+05:30",
      "auditDate": "2024-05-27",
      "products": [
        {
          "productId": "P-05",
          "name": "Butter 100g",
          "sku": "BUT-100",
          "batchNo": "B240501-04",
          "location": "A-03-01",
          "expected": 250,
          "extra": 0,
          "classification": "EXPIRED",
          "reasonNarrative": "20 units past shelf-life date on rack.",
          "evidence": {
            "photos": [
              {
                "caption": "Expiry labels"
              }
            ],
            "documents": []
          },
          "verifiedOk": 230,
          "verifiedExpired": 20,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-04",
          "name": "Ghee 500ml",
          "sku": "GHEE-500",
          "batchNo": "B240505-02",
          "location": "A-03-02",
          "expected": 150,
          "extra": 0,
          "classification": "MISSING",
          "reasonNarrative": "10 jars short; investigating handling.",
          "evidence": {
            "photos": [],
            "documents": []
          },
          "verifiedOk": 140,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        },
        {
          "productId": "P-07",
          "name": "Lassi 200ml",
          "sku": "LAS-200",
          "batchNo": "B240506-01",
          "location": "A-04-01",
          "expected": 400,
          "extra": 0,
          "verifiedOk": 400,
          "verifiedExpired": 0,
          "verifiedWaste": 0,
          "expiryDate": ""
        }
      ]
    },
    {
      "id": "AUD-2405-011",
      "name": "Raw Material Audit - May",
      "warehouseId": "WH-02",
      "entity": "RM",
      "auditorUserId": "U-2",
      "status": "draft",
      "createdAt": "2024-05-30T09:00:00+05:30",
      "updatedAt": "2024-05-30T09:15:00+05:30",
      "submittedAt": null,
      "progress": 20,
      "countedTotal": 38,
      "productTotal": 192,
      "products": []
    },
    {
      "id": "AUD-2405-008",
      "name": "RM Audit - May W3",
      "warehouseId": "WH-05",
      "entity": "RM",
      "auditorUserId": "U-5",
      "status": "approved",
      "createdAt": "2024-05-28T09:00:00+05:30",
      "updatedAt": "2024-05-28T14:30:00+05:30",
      "submittedAt": "2024-05-28T11:10:00+05:30",
      "progress": 100,
      "countedTotal": 342,
      "productTotal": 342,
      "products": []
    },
    {
      "id": "AUD-2405-007",
      "name": "Asset Audit - May W3",
      "warehouseId": "WH-01",
      "entity": "Asset",
      "auditorUserId": "U-6",
      "status": "closed",
      "createdAt": "2024-05-27T09:00:00+05:30",
      "updatedAt": "2024-05-27T17:15:00+05:30",
      "submittedAt": "2024-05-27T16:00:00+05:30",
      "progress": 100,
      "countedTotal": 95,
      "productTotal": 95,
      "products": []
    },
    {
      "id": "AUD-2405-005",
      "name": "RM Audit - May W2",
      "warehouseId": "WH-03",
      "entity": "RM",
      "auditorUserId": "U-2",
      "status": "cancelled",
      "createdAt": "2024-05-26T09:00:00+05:30",
      "updatedAt": "2024-05-26T11:20:00+05:30",
      "submittedAt": null,
      "progress": 0,
      "countedTotal": 0,
      "productTotal": 180,
      "products": []
    },
    {
      "id": "AUD-2405-004",
      "name": "Weekly FG Audit - May W2",
      "warehouseId": "WH-04",
      "entity": "FG",
      "auditorUserId": "U-4",
      "status": "in_progress",
      "createdAt": "2024-05-26T09:00:00+05:30",
      "updatedAt": "2024-05-26T13:40:00+05:30",
      "submittedAt": null,
      "progress": 62,
      "countedTotal": 120,
      "productTotal": 194,
      "products": []
    },
    {
      "id": "AUD-2405-003",
      "name": "Cold Storage Audit - May",
      "warehouseId": "WH-05",
      "entity": "FG",
      "auditorUserId": "U-5",
      "status": "under_review",
      "createdAt": "2024-05-25T09:00:00+05:30",
      "updatedAt": "2024-05-25T18:05:00+05:30",
      "submittedAt": "2024-05-25T17:00:00+05:30",
      "progress": 100,
      "countedTotal": 88,
      "productTotal": 88,
      "products": []
    },
    {
      "id": "AUD-2405-002",
      "name": "Packaging RM Audit - May",
      "warehouseId": "WH-01",
      "entity": "RM",
      "auditorUserId": "U-6",
      "status": "draft",
      "createdAt": "2024-05-24T09:00:00+05:30",
      "updatedAt": "2024-05-24T09:50:00+05:30",
      "submittedAt": null,
      "progress": 5,
      "countedTotal": 9,
      "productTotal": 176,
      "products": []
    },
    {
      "id": "AUD-2405-001",
      "name": "Equipment Asset Audit - May",
      "warehouseId": "WH-02",
      "entity": "Asset",
      "auditorUserId": "U-3",
      "status": "approved",
      "createdAt": "2024-05-23T09:00:00+05:30",
      "updatedAt": "2024-05-23T16:20:00+05:30",
      "submittedAt": "2024-05-23T14:00:00+05:30",
      "progress": 100,
      "countedTotal": 64,
      "productTotal": 64,
      "products": []
    }
  ],
  "settlements": [
    {
      "id": "SET-2405-010",
      "auditId": "AUD-2405-010",
      "warehouseId": "WH-03",
      "entity": "Asset",
      "submittedAt": "2024-05-29T17:30:00+05:30",
      "priority": "high",
      "status": "pending_review"
    },
    {
      "id": "SET-2405-009",
      "auditId": "AUD-2405-009",
      "warehouseId": "WH-04",
      "entity": "FG",
      "submittedAt": "2024-05-29T15:20:00+05:30",
      "priority": "medium",
      "status": "under_review"
    },
    {
      "id": "SET-2405-006",
      "auditId": "AUD-2405-006",
      "warehouseId": "WH-02",
      "entity": "FG",
      "submittedAt": "2024-05-27T10:05:00+05:30",
      "priority": "medium",
      "status": "pending_review"
    }
  ],
  "actionTickets": [
    {
      "id": "AT-2405-015",
      "auditId": "AUD-2405-009",
      "productId": "P-03",
      "warehouseId": "WH-04",
      "entity": "FG",
      "title": "Recover chiller-breach loss — Curd",
      "description": "15 units of Curd 400g spoiled due to a Chiller-2 overnight temperature breach. Pursue recovery from the maintenance vendor under the AMC and confirm chiller repair.",
      "status": "open",
      "priority": "high",
      "assignedToUserId": "U-4",
      "createdByUserId": "U-APP",
      "createdAt": "2024-05-29T16:20:00+05:30",
      "comments": [
        {
          "who": "Amit Singh",
          "when": "2024-05-29T16:22:00+05:30",
          "text": "Opened from settlement of AUD-2405-009. Attach the AMC reference before contacting the vendor."
        }
      ]
    },
    {
      "id": "AT-2405-014",
      "auditId": "AUD-2405-010",
      "productId": "A-01",
      "warehouseId": "WH-03",
      "entity": "Asset",
      "title": "Locate / recover missing forklift FL-12",
      "description": "Forklift FL-12 not found at bay 3. Trace movement logs and raise with security.",
      "status": "in_progress",
      "priority": "high",
      "assignedToUserId": "U-3",
      "createdByUserId": "U-APP",
      "createdAt": "2024-05-29T18:00:00+05:30",
      "comments": [
        {
          "who": "Imran Khan",
          "when": "2024-05-30T09:10:00+05:30",
          "text": "Reviewing gate-pass logs for the last 3 weeks."
        }
      ]
    },
    {
      "id": "AT-2405-013",
      "auditId": "AUD-2405-006",
      "productId": "P-04",
      "warehouseId": "WH-02",
      "entity": "FG",
      "title": "Investigate short Ghee stock",
      "description": "10 jars of Ghee 500ml short at Pune Warehouse. Review handling and CCTV.",
      "status": "open",
      "priority": "medium",
      "assignedToUserId": "U-1",
      "createdByUserId": "U-APP",
      "createdAt": "2024-05-27T11:00:00+05:30",
      "comments": []
    },
    {
      "id": "AT-2405-012",
      "auditId": "AUD-2405-003",
      "productId": null,
      "warehouseId": "WH-05",
      "entity": "FG",
      "title": "Cold-storage waste root cause",
      "description": "Repeated waste in cold storage — identify root cause across recent audits.",
      "status": "in_progress",
      "priority": "medium",
      "assignedToUserId": "U-5",
      "createdByUserId": "U-APP2",
      "createdAt": "2024-05-25T18:30:00+05:30",
      "comments": []
    },
    {
      "id": "AT-2405-011",
      "auditId": "AUD-2405-001",
      "productId": null,
      "warehouseId": "WH-02",
      "entity": "Asset",
      "title": "Reconcile asset tag mismatch",
      "description": "Two assets with swapped tags; reconcile the register.",
      "status": "resolved",
      "priority": "low",
      "assignedToUserId": "U-3",
      "createdByUserId": "U-APP",
      "createdAt": "2024-05-23T16:30:00+05:30",
      "comments": [
        {
          "who": "Imran Khan",
          "when": "2024-05-24T10:00:00+05:30",
          "text": "Tags corrected in the register; ready to close."
        }
      ]
    },
    {
      "id": "AT-2405-010",
      "auditId": "AUD-2405-007",
      "productId": null,
      "warehouseId": "WH-01",
      "entity": "Asset",
      "title": "Forklift asset location mismatch",
      "description": "Asset location register out of date after floor reshuffle.",
      "status": "closed",
      "priority": "low",
      "assignedToUserId": "U-6",
      "createdByUserId": "U-APP",
      "createdAt": "2024-05-27T17:20:00+05:30",
      "comments": []
    }
  ],
  "snapshots": [
    {
      "id": "SNAP-0011",
      "warehouseId": "WH-01",
      "entity": "FG",
      "stockTotalCount": 8420,
      "approverUser": "Amit Singh",
      "datetime": "2024-05-28T18:00:00+05:30"
    },
    {
      "id": "SNAP-0010",
      "warehouseId": "WH-05",
      "entity": "RM",
      "stockTotalCount": 5210,
      "approverUser": "Amit Singh",
      "datetime": "2024-05-27T17:30:00+05:30"
    },
    {
      "id": "SNAP-0009",
      "warehouseId": "WH-02",
      "entity": "Asset",
      "stockTotalCount": 640,
      "approverUser": "Amit Singh",
      "datetime": "2024-05-23T16:45:00+05:30"
    },
    {
      "id": "SNAP-0008",
      "warehouseId": "WH-03",
      "entity": "RM",
      "stockTotalCount": 3120,
      "approverUser": "Amit Singh",
      "datetime": "2024-05-21T16:00:00+05:30"
    },
    {
      "id": "SNAP-0007",
      "warehouseId": "WH-04",
      "entity": "FG",
      "stockTotalCount": 2980,
      "approverUser": "Amit Singh",
      "datetime": "2024-05-18T15:20:00+05:30"
    },
    {
      "id": "SNAP-0006",
      "warehouseId": "WH-01",
      "entity": "FG",
      "stockTotalCount": 8110,
      "approverUser": "Amit Singh",
      "datetime": "2024-05-15T18:00:00+05:30"
    }
  ],
  "dashboard": {
    "completedThisMonth": 48,
    "snapshotsThisMonth": 6,
    "varianceSummary": {
      "missing": 1620,
      "extra": 210,
      "waste": 900,
      "expired": 260,
      "totalVariance": -1248
    },
    "trend": [
      {
        "date": "01 May",
        "missing": -520,
        "extra": 180,
        "waste": -120,
        "expired": 260
      },
      {
        "date": "06 May",
        "missing": -640,
        "extra": 150,
        "waste": -140,
        "expired": 320
      },
      {
        "date": "11 May",
        "missing": -480,
        "extra": 200,
        "waste": -110,
        "expired": 180
      },
      {
        "date": "16 May",
        "missing": -900,
        "extra": 170,
        "waste": -130,
        "expired": 240
      },
      {
        "date": "21 May",
        "missing": -760,
        "extra": 210,
        "waste": -120,
        "expired": 150
      },
      {
        "date": "26 May",
        "missing": -1180,
        "extra": 160,
        "waste": -150,
        "expired": 200
      },
      {
        "date": "31 May",
        "missing": -1620,
        "extra": 210,
        "waste": -140,
        "expired": 130
      }
    ]
  }
};
