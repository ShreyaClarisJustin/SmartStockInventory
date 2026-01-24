# Pre-Launch Checklist ✓

## Backend Setup
- [x] Convert Node.js/Express to Python/Flask
- [x] Create Flask application structure
- [x] Implement authentication routes (signup/login)
- [x] Implement product routes
- [x] Implement transaction routes
- [x] Add JWT middleware
- [x] Configure MongoDB connection
- [x] Add error handling and validation
- [x] Fix blueprint initialization
- [x] Create requirements.txt

## Frontend Setup
- [x] Fix HTML script paths (login.js → js/login.js)
- [x] Add defer attribute to script loading
- [x] Update API endpoint ports (5000 → 3000)
- [x] Fix admin-dashboard.html script loading
- [x] Fix employee-dashboard.html script loading
- [x] Verify openPage function works

## Testing Checklist

Before launching, test these scenarios:

### Authentication Flow
- [ ] Sign up with new account
  - [ ] Email validation works
  - [ ] Password hashing verified in MongoDB
  - [ ] Redirect to login page on success
  
- [ ] Login with credentials
  - [ ] JWT token generated
  - [ ] Token stored in localStorage
  - [ ] User role retrieved correctly
  - [ ] Admin redirects to admin-dashboard.html
  - [ ] Employee redirects to employee-dashboard.html

### Admin Dashboard
- [ ] Dashboard loads correctly
- [ ] User name displays from localStorage
- [ ] Low stock products section shows data
- [ ] Logout button clears localStorage

### Product Management (Admin)
- [ ] Add Product page loads
- [ ] Form validation works
- [ ] Product added to MongoDB
- [ ] Stock update functionality works
- [ ] Delete product removes from database

### Security
- [ ] Non-admin users cannot access /admin-dashboard.html
- [ ] Non-employee users cannot access /employee-dashboard.html
- [ ] API endpoints require valid JWT token
- [ ] Expired tokens are rejected
- [ ] Wrong passwords rejected

### Error Handling
- [ ] Login with invalid email shows error
- [ ] Login with wrong password shows error
- [ ] Signup with existing email shows error
- [ ] Missing fields show validation errors
- [ ] Server errors display meaningful messages

---

## Installation Commands (Step by Step)

```bash
# 1. Navigate to backend
cd d:\Smart_stock\backend

# 2. Install Python packages
pip install Flask flask-cors flask-pymongo PyJWT bcrypt pymongo

# 3. Verify MongoDB is running (in another terminal/window)
mongod

# 4. Start Flask server
python app.py

# 5. Open browser
http://localhost:3000
```

---

## Verification Steps

### Check Backend is Running
```
Terminal Output Should Show:
* Running on http://127.0.0.1:3000
* Debug mode: on
```

### Check MongoDB Connection
```
Browser Console Should NOT Show:
- "MongoDB Connection Error"
- "Cannot connect to MongoDB"
```

### Check Frontend Assets Load
```
Browser Console Should NOT Show:
- "Failed to load resource" for .js files
- "Failed to load resource" for .css files
```

---

## Common Issues to Watch For

| Issue | Check |
|-------|-------|
| "Port 3000 in use" | Change port in app.py or close other services |
| "MongoDB connection error" | Run `mongod` in separate terminal |
| "Cannot find module" | Run `pip install -r requirements.txt` |
| "Script not found" | Verify script paths use `js/` prefix |
| "Login fails silently" | Check browser console for errors |

---

## Success Indicators

✅ Application runs without errors  
✅ Frontend loads at http://localhost:3000  
✅ Signup creates users in MongoDB  
✅ Login generates valid JWT tokens  
✅ Admin/Employee dashboards show correctly  
✅ Product operations work end-to-end  
✅ Authentication middleware protects routes  
✅ Errors are meaningful and informative  

---

## Quick Reference

**Start Everything:**
```bash
# Terminal 1: MongoDB
mongod

# Terminal 2: Flask Backend
cd d:\Smart_stock\backend && python app.py

# Then open browser to http://localhost:3000
```

**Reset Everything:**
```bash
# Clear localStorage in browser (DevTools)
localStorage.clear()

# Clear MongoDB (if needed)
# Connect to MongoDB and run: db.dropDatabase()
```

---

## Files to Know

| File | Purpose |
|------|---------|
| `app.py` | Main Flask application |
| `routes/auth_routes.py` | Login/Signup endpoints |
| `routes/product_routes.py` | Product management |
| `middleware/auth_middleware.py` | JWT validation |
| `requirements.txt` | Python dependencies |
| `index.html` | Login page |
| `sign-up.html` | Registration page |
| `admin-dashboard.html` | Admin home page |
| `employee-dashboard.html` | Employee home page |

---

## Support Resources

1. **QUICK_START.md** - Get running in 5 minutes
2. **SETUP_GUIDE.md** - Complete setup instructions
3. **CONVERSION_SUMMARY.md** - What was changed
4. **Browser Console (F12)** - Debug frontend issues
5. **Flask Terminal Output** - Debug backend issues

---

## Go Live Checklist

- [ ] All tests pass
- [ ] No console errors
- [ ] Server runs without warnings
- [ ] MongoDB connection confirmed
- [ ] Frontend loads all assets
- [ ] Authentication flow works
- [ ] Database operations verified
- [ ] Read this file once more before going live

**You're ready to launch! 🚀**
