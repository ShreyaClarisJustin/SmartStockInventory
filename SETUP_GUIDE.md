# Smart Stock - Backend Flask Conversion Guide

## Current Status
Your JavaScript backend has been successfully converted to Python Flask. Here's what's been done:

### ✅ Completed Tasks

1. **Backend Converted to Flask**
   - `app.py` - Main Flask application with routes
   - `routes/auth_routes.py` - Login/Signup endpoints
   - `routes/product_routes.py` - Product management endpoints
   - `routes/transaction_routes.py` - Transaction tracking endpoints
   - `middleware/auth_middleware.py` - JWT authentication

2. **Frontend HTML Fixed**
   - Fixed script paths (changed from `login.js` to `js/login.js`)
   - Updated signup to use port 3000 (not 5000)
   - Added `defer` attribute to script loading
   - Fixed dashboard.js script reference

3. **Database**
   - MongoDB configured at `mongodb://127.0.0.1:27017/authDB`
   - Collections: users, products, transactions

---

## Next Steps to Run the Application

### Step 1: Install Python Dependencies
```bash
cd d:\Smart_stock\backend
pip install Flask flask-cors flask-pymongo PyJWT bcrypt pymongo
```

### Step 2: Ensure MongoDB is Running
Make sure MongoDB is running on `127.0.0.1:27017`:
```bash
# If using MongoDB Community Edition on Windows
mongod
```

### Step 3: Run the Flask Backend
```bash
cd d:\Smart_stock\backend
python app.py
```

Server will start at `http://localhost:3000`

### Step 4: Access the Application
Open browser and navigate to:
```
http://localhost:3000
```

---

## API Endpoints

### Authentication
- `POST /signup` - Create new user
- `POST /login` - Login user (returns JWT token)

### Users (Admin only)
- `GET /users` - Get all users
- `POST /users` - Create user
- `PUT /users/<id>` - Update user
- `DELETE /users/<id>` - Delete user

### Products (Admin only)
- `GET /products` - Get all products
- `POST /products` - Add product
- `PUT /products/<id>/stock` - Update product stock
- `DELETE /products/<id>` - Delete product

### Transactions (Admin only)
- `GET /transactions` - Get all transactions
- `POST /transactions` - Create transaction
- `PUT /transactions/<id>` - Update transaction
- `DELETE /transactions/<id>` - Delete transaction

---

## Authentication Flow

1. User enters email/password on login page (`index.html`)
2. Login request sent to `POST /login`
3. Server returns JWT token and user role
4. Frontend stores token in `localStorage`
5. Based on role:
   - Admin → redirects to `admin-dashboard.html`
   - Employee → redirects to `employee-dashboard.html`

All subsequent API calls must include token in header:
```
Authorization: Bearer <token>
```

---

## File Structure
```
Smart_stock/
├── backend/
│   ├── app.py
│   ├── middleware/
│   │   └── auth_middleware.py
│   ├── routes/
│   │   ├── auth_routes.py
│   │   ├── product_routes.py
│   │   └── transaction_routes.py
│   ├── requirements.txt
│   └── __pycache__/
│
└── frontend/
    ├── index.html
    ├── admin-dashboard.html
    ├── employee-dashboard.html
    ├── add-product.html
    ├── style.css
    └── js/
        ├── login.js
        ├── signup.js
        ├── dashboard.js
        └── add-product.js
```

---

## Troubleshooting

### Issue: `404 NOT FOUND` for JS files
**Solution**: Make sure script tags use correct paths with `js/` subdirectory
```html
<!-- ✓ Correct -->
<script src="js/login.js" defer></script>

<!-- ✗ Wrong -->
<script src="login.js" defer></script>
```

### Issue: `Error: Access denied` or token issues
**Solution**: Ensure token is properly sent in headers
```javascript
const token = localStorage.getItem("token");
const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
};
```

### Issue: MongoDB connection error
**Solution**: 
1. Verify MongoDB is running: `mongod`
2. Check connection string: `mongodb://127.0.0.1:27017/authDB`
3. Verify firewall isn't blocking port 27017

### Issue: CORS errors
**Solution**: CORS is already enabled in Flask app via `CORS(app)`

---

## Key Changes from JavaScript to Python

| JavaScript (Node.js) | Python (Flask) |
|-------------------|-----------------|
| `express()` | `Flask(__name__)` |
| `.post()` | `@app.route(..., methods=["POST"])` |
| `res.json()` | `jsonify()` |
| Mongoose models | MongoDB with PyMongo |
| `bcryptjs` | `bcrypt` |
| `jsonwebtoken` | `PyJWT` |

---

## Testing the Application

1. **Test Signup**
   - Go to `http://localhost:3000/sign-up.html`
   - Create account with email, password, firstname, and role

2. **Test Login**
   - Go to `http://localhost:3000`
   - Login with created credentials
   - Should redirect to appropriate dashboard

3. **Test Product Addition** (Admin only)
   - On admin dashboard, click "Add New Products"
   - Fill form and submit
   - Product should appear in inventory

---

## Additional Notes

- All passwords are hashed with bcrypt before storage
- JWT tokens expire after 1 hour
- Role-based access control enforced on backend
- Frontend also has role checks for better UX
- All errors are logged to console for debugging

For questions or issues, check the browser console (F12) and server terminal for error messages.
