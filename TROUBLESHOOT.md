# Troubleshooting Guide - Smart Stock

## Quick Checklist Before Running

### 1. **Ensure MongoDB is Running**
```bash
# On Windows (if installed)
mongod

# Or start MongoDB service in Services
```
- Should see: `[initandlisten] waiting for connections on port 27017`

### 2. **Install Python Dependencies**
```bash
cd d:\Smart_stock\backend
pip install -r requirements.txt
```

Dependencies needed:
- Flask==2.3.0
- flask-pymongo==2.3.0
- flask-cors==4.0.0
- PyJWT==2.8.1
- bcrypt==4.1.1
- pymongo==4.6.0

### 3. **Start Flask Server**
```bash
cd d:\Smart_stock\backend
python app.py
```

Expected output:
```
WARNING in app.runserver:
 * Running on http://127.0.0.1:3000 (Press CTRL+C to quit)
```

### 4. **Access Frontend**
Open in browser: `http://localhost:3000`
- Should see login page
- Create account or login

---

## Common Issues & Fixes

### Issue: "Failed to fetch" when loading products

**Cause 1: Flask server not running**
- Check terminal where Flask is running
- Should see `Running on http://127.0.0.1:3000`
- Fix: Start Flask with `python app.py`

**Cause 2: MongoDB not running**
- Check if mongod process is running
- Fix: Start MongoDB service

**Cause 3: Token expired or invalid**
- Fix: Logout and login again to get fresh token
- Token lasts 1 hour

**Cause 4: Check browser console**
- Open DevTools (F12)
- Check Console tab for detailed error messages
- Should show HTTP response status code

### Issue: 404 Not Found on /products

- Verify Flask is running and shows the products route registered
- Check app.py line 37-38 has both parameters: `init_product_routes(mongo, app)`

### Issue: 500 Internal Server Error

- Check Flask terminal for error message
- Common causes:
  - Missing MongoDB connection
  - Invalid JWT token format
  - Database connection issue

### Issue: CORS Error

- Should be fixed automatically - CORS is enabled in Flask
- If still occurring, check app.py line 18: `CORS(app)`

---

## Testing Products API Directly

### Using Terminal (PowerShell):

1. **Login first to get token:**
```powershell
$loginData = @{
    email = "admin@test.com"
    password = "password123"
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "http://localhost:3000/auth/login" `
    -Method POST `
    -ContentType "application/json" `
    -Body $loginData

$token = ($response.Content | ConvertFrom-Json).token
Write-Host "Token: $token"
```

2. **Test GET /products:**
```powershell
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

Invoke-WebRequest -Uri "http://localhost:3000/products" `
    -Method GET `
    -Headers $headers
```

3. **Add a product:**
```powershell
$productData = @{
    name = "Test Product"
    category = "Electronics"
    supplier = "Test Supplier"
    sku = "TST001"
    price = 100
    stock = 50
    lowStockLimit = 10
} | ConvertTo-Json

$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

Invoke-WebRequest -Uri "http://localhost:3000/products" `
    -Method POST `
    -Headers $headers `
    -Body $productData
```

---

## Test Workflow

### Step 1: Create Account
1. Go to http://localhost:3000
2. Click "Sign Up"
3. Fill form with:
   - Name: Test Admin
   - Email: admin@test.com
   - Password: password123
   - Role: Admin
4. Click "Sign Up"

### Step 2: Login
1. Enter credentials
2. Should redirect to admin-dashboard.html
3. Check if "Add Product" button works

### Step 3: Add Product
1. Click "Add Product"
2. Fill the form:
   - Name: Widget
   - Category: Electronics
   - Supplier: Tech Corp
   - SKU: WID001
   - Price: 99.99
   - Quantity: 100
   - Low Stock Limit: 20
3. Click "Add Product"
4. Should see success message
5. Return to dashboard

### Step 4: Update Stock
1. Click "Update Stock"
2. Select product from dropdown (should see "Widget (100 in stock)")
3. If dropdown is empty, there's a problem fetching products
4. Reduce quantity and click "Update"
5. Should see success message

### Step 5: View Transactions
1. Click "View Transactions"
2. Should see the stock update transaction you just made

---

## Debug Console Messages

Look for these in browser DevTools (F12 → Console):

**Good signs:**
```
Products response status: 200
Products data: Array(5)
```

**Problems:**
```
Products response status: 401  ← Token invalid
Products response status: 500  ← Server error
Failed to fetch                ← Connection refused
```

---

## Database Check

### View MongoDB Collections

```powershell
# In PowerShell, use mongosh or mongo client
mongosh

# Commands:
use authDB
db.products.find()        # View all products
db.users.find()           # View all users
db.transactions.find()    # View all transactions
```

---

## File Verification

✅ Required backend files:
- d:\Smart_stock\backend\app.py
- d:\Smart_stock\backend\routes\auth_routes.py
- d:\Smart_stock\backend\routes\product_routes.py
- d:\Smart_stock\backend\routes\transaction_routes.py
- d:\Smart_stock\backend\middleware\auth_middleware.py
- d:\Smart_stock\backend\models\user.py
- d:\Smart_stock\backend\models\product.py
- d:\Smart_stock\backend\models\transaction.py

✅ Required frontend files:
- d:\Smart_stock\frontend\index.html
- d:\Smart_stock\frontend\admin-dashboard.html
- d:\Smart_stock\frontend\employee-dashboard.html
- d:\Smart_stock\frontend\add-product.html
- d:\Smart_stock\frontend\update-stock.html
- d:\Smart_stock\frontend\manage-employees.html
- d:\Smart_stock\frontend\js\*.js (all JavaScript files)

---

## Next Steps

If everything works:
1. ✅ Create test users
2. ✅ Add test products
3. ✅ Test stock updates
4. ✅ View transactions
5. ✅ Switch between admin and employee accounts

The app is now ready to use!
