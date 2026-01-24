# Quick Start - Smart Stock Backend

## What Was Done
✅ Converted entire JavaScript backend to Python Flask
✅ Fixed frontend HTML script references  
✅ Set up MongoDB integration with PyMongo
✅ Implemented JWT authentication with bcrypt hashing
✅ Created API routes for auth, products, and transactions

## To Run Your Application Now:

### 1. Install Dependencies (One Time)
```bash
cd d:\Smart_stock\backend
pip install Flask flask-cors flask-pymongo PyJWT bcrypt pymongo
```

### 2. Start MongoDB
```bash
mongod
```
(Keep this running in another terminal)

### 3. Start Flask Backend
```bash
cd d:\Smart_stock\backend
python app.py
```

### 4. Open Browser
```
http://localhost:3000
```

---

## Available Accounts to Test With

After signup, use any credentials you create. Example:

**Admin Account:**
- Email: admin@example.com
- Password: password123
- Role: admin

**Employee Account:**
- Email: emp@example.com
- Password: password123
- Role: employee

---

## Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| "404 Not Found" for JS | Check HTML script tags use `js/filename.js` path |
| "Cannot login" | Ensure MongoDB is running with `mongod` |
| "Port 3000 already in use" | Change port in app.py line 145: `app.run(port=3001, debug=True)` |
| "CORS error" | Already handled - should work without changes |

---

## Architecture Overview

```
Frontend (HTML/CSS/JS)
    ↓ (HTTP Requests with JWT)
Flask Backend (app.py)
    ├── /login, /signup (auth_routes.py)
    ├── /products (product_routes.py)
    ├── /transactions (transaction_routes.py)
    └── /users (app.py)
    ↓ (MongoDB queries)
MongoDB (authDB)
    ├── users collection
    ├── products collection
    └── transactions collection
```

---

## Next: Admin Dashboard Features

Once logged in as admin:

1. **Add Products** → add-product.html
2. **Update Stock** → update-stock.html  
3. **View Inventory** → view-inventory.html
4. **View Transactions** → view-transactions.html
5. **Manage Employees** → manage-employees.html
6. **Check Low Stock** → low-stock.html

---

## Files Modified

**Backend:**
- app.py ✅
- routes/auth_routes.py ✅
- routes/product_routes.py ✅
- routes/transaction_routes.py ✅
- middleware/auth_middleware.py ✅

**Frontend:**
- index.html (script path fixed) ✅
- sign-up.html (script path fixed) ✅
- admin-dashboard.html (script defer added) ✅
- employee-dashboard.html (script defer added) ✅
- js/signup.js (port updated) ✅

---

## Support

Check console errors (F12 in browser) and terminal output for detailed error messages.
