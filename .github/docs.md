# AutoHub API Documentation

This documentation provides a high-level overview of the AutoHub API, designed to enable AI agents and frontend developers to consume the API effectively.

## 1. General Information

- **Base URL**: `/api`
- **Authentication**: Laravel Sanctum (Bearer Token).
- **Response Format**: JSON.
- **Date Format**: Standard SQL timestamps (YYYY-MM-DD HH:MM:SS) or ISO 8601.

### Standard Response Envelope

All API responses follow this structure:

```json
{
    "status": 200,          // HTTP Status Code (or custom logic code)
    "message": "Success",   // Human-readable message
    "data": { ... },        // The actual payload (Object or Array)
    "plus": "",             // Optional: Additional metadata
    "additions": ""         // Optional: Cookie data or other extras
}
```

### Error Response

```json
{
    "status": 403,
    "message": "Validation Errors",
    "data": [ "Email is required", ... ] // Array of error messages or object
}
```

---

## 2. Authentication (`/api/auth`)

### Login
- **Endpoint**: `POST /api/auth/login`
- **Payload**:
  ```json
  {
      "email": "user@example.com",
      "password": "password123"
  }
  ```
- **Response Data**:
  ```json
  {
      "firstname": "John",
      "surname": "Doe",
      "phone": "08012345678",
      "email": "john@example.com",
      "verified": "verified", // or "unverified"
      "reset": "unset",
      "passport": "https://...",
      "user_type": "member" // member, dealer, affiliate
  }
  ```
  *Note: The `plus` field in the response contains the Bearer Token, and `additions` contains user roles array.*

### Signup (Member)
- **Endpoint**: `POST /api/auth/signup-member`
- **Payload**:
  ```json
  {
      "data": {
          "firstname": "John",
          "surname": "Doe",
          "phone": "08012345678",
          "email": "john@example.com",
          "password": "password123",
          "confirm_password": "password123",
          "passport": "base64_string..." // Optional profile picture
      }
  }
  ```
  *Note: The controller expects `data` array wrapping the fields.*

### Signup (Dealer)
- **Endpoint**: `POST /api/auth/signup-dealer`
- **Payload**:
  ```json
  {
      "data": {
          "company_name": "Auto Corp",
          "company_address": "123 Street",
          "rc_number": "RC123456",
          "firstname": "John",
          "surname": "Doe",
          "phone": "08012345678",
          "email": "dealer@example.com",
          "password": "password123",
          "confirm_password": "password123",
          "passport": "base64_string..."
      }
  }
  ```

### Password Management
- **Forgot Password**: `POST /api/auth/forgot-password` (`{email}`)
- **Reset Password**: `GET /api/auth/email/reset/{id}/{hash}`
- **Set New Password**: `PUT /api/auth/set-new-password` (`{user, password}`)
- **Change Password**: `PUT /api/auth/change-password` (`{old_password, password, password_confirmation}`) (Auth required)

---

## 3. Public Data & Bootstrapping (`/api`)

These endpoints are used to populate the frontend with initial data.

### Landing Page Data
- **Endpoint**: `GET /api/landing`
- **Description**: Returns data for the home page.
- **Response Data**:
  - `category`: List of categories with product counts.
  - `slider`: Main banner sliders.
  - `products`: List of products.
  - `product`: Featured products (user specific if logic implies).
  - `settings`: Global app settings.

### Advert Data (Global Bootstrap)
- **Endpoint**: `GET /api/data`
- **Description**: Returns comprehensive reference data for forms and filters.
- **Response Data**:
  ```json
  {
      "products": [ /* Array of Product Objects (see below) */ ],
      "country": [ { "tb_id": 1, "name": "Nigeria", "rate": 1 } ],
      "state": [ { "tb_id": 1, "country_id": 1, "name": "Lagos", "rate": 1 } ],
      "lga": [ { "tb_id": 1, "state_id": 1, "name": "Ikeja", "rate": 1 } ],
      "manufacturer": [ { "tb_id": 1, "name": "Toyota", "icon": "...", "rate": 1 } ],
      "model": [ { "tb_id": 1, "manufacturer_id": 1, "name": "Camry", "rate": 1 } ],
      "fuel": [ { "tb_id": 1, "name": "Petrol" } ],
      "colour": [ { "tb_id": 1, "name": "Black", "rate": 1 } ],
      "transmission": [ { "tb_id": 1, "name": "Automatic" } ],
      "condition": [ { "tb_id": 1, "name": "Foreign Used" } ],
      "category": [ { "tb_id": 1, "name": "Cars", "icon": "...", "hash": "..." } ],
      "slider": [ ... ],
      "settings": { ... }
  }
  ```

### Active Products (Paginated)
- **Endpoint**: `GET /api/active/{current_page}/{per_page}`
- **Example**: `GET /api/active/1/20`
- **Response Data**: Array of Product Objects.

### Product Details
- **Endpoint**: `GET /api/detail/{slug}`
- **Description**: Get full details of a specific product.
- **Response Data**:
  ```json
  {
      "category": [ ... ],
      "product": { /* Detailed Product Object */ },
      "featured": [ ... ],
      "other_user_product": [ ... ],
      "other_product": [ ... ]
  }
  ```

---

## 4. User & Product Management (`/api/users`)

**Middleware**: `auth:sanctum` (Requires Bearer Token)

### Create Product
- **Endpoint**: `POST /api/users/create`
- **Payload**:
  ```json
  {
      "title": "Toyota Camry 2020",
      "description": "Clean car...",
      "price": 5000000,
      "year": "2020",
      "mileage": 50000,
      "chasis_no": "...",
      "country": 1,
      "state": 1,
      "lga": 1,
      "category": 1,
      "manufacturer": 1,
      "model": 1,
      "trim": 1, // Optional
      "serie": 1, // Optional
      "colour": 1,
      "condition": 1,
      "transmission": 1,
      "fuel": 1,
      "draft": "no", // "yes" or "no"
      "others": "no", // "yes" if creating new Make/Model
      "images": [
          { "image": "base64...", "faceImage": 0 }, // faceImage is index of cover
          { "image": "base64...", "faceImage": 0 }
      ],
      "imagePosition": 0 // Index of the face image
  }
  ```

### Update Product
- **Endpoint**: `PUT /api/users/update`
- **Payload**: Similar to create, plus `id` and `slug`.

### User Lists
- **My Active Products**: `GET /api/users/user-active-product/{page}/{per_page}`
- **My Drafts**: `GET /api/users/user-draft-product/{page}/{per_page}`
- **My Sold Products**: `GET /api/users/user-sold-product/{page}/{per_page}`
- **My Wishlist**: `GET /api/users/user-wishlist/{page}/{per_page}`

### Profile
- **Get Profile**: `GET /api/users/profile`
- **Response Data**: User object, potentially with `dealers` or `affiliate` relationship loaded.
- **Update Profile**: `PUT /api/users/update-profile`
- **Upload Profile Pic**: `PUT /api/users/change-picture` (`{passport: base64...}`)

### Reference Data (Cascading Selects)
- `GET /api/users/countries`
- `GET /api/users/states/{country_id}`
- `GET /api/users/lgas/{state_id}`
- `GET /api/users/models/{manufacturer_id}`
- `GET /api/users/generations/{model_id}`
- `GET /api/users/series/{manufacturer_id}/{model_id}/{generation_id}`
- `GET /api/users/trim/{model_id}/{serie_id}`

---

## 5. Student & Academic (`/api/students`)

**Middleware**: `auth:sanctum`

### Dashboard
- **Endpoint**: `GET /api/students/dashboard`
- **Response Data**:
  ```json
  {
      "attempted": 5,
      "courses": 10,
      "objective": [ ... ], // Test results
      "exam_objective": [ ... ],
      "exam_theory": [ ... ]
  }
  ```
  *Note: `plus` field contains Student object, `additions` contains Market overview stats.*

### Courses
- **Endpoint**: `GET /api/students/courses`
- **Response Data**: List of courses with `loadable` status and file info.

### Time Table
- **Endpoint**: `GET /api/students/time-table`
- **Response Data**: List of scheduled courses. `plus` is start date, `additions` is end date.

### Exam Questions
- **Endpoint**: `GET /api/students/exam-questions`
- **Response Data**:
  - `data`: Exam Assessment info.
  - `plus`: Objective questions array.
  - `additions`: Theory questions array.
  - `journey`: User journey status.

### Submit Exam
- **Endpoint**: `POST /api/students/submit-exam`
- **Payload**:
  ```json
  {
      "userSubmitted": "yes", // or "no"
      "answers": {
          "objective": [
              { "exam_question_id": 1, "selected": "A" },
              ...
          ],
          "theory": [
              { "exam_theory_question_id": 1, "answer": "My answer..." },
              ...
          ]
      }
  }
  ```

---

## 6. Key Models & Fields

### Product Object Structure
```json
{
    "tb_id": 1,
    "user_id": 1,
    "title": "Toyota Camry 2010",
    "face_image": "https://...",
    "slug": "...",
    "description": "...",
    "price": 5000000,
    "status": "active",
    "mileage": "50km",
    "year": "2010",
    "address": "Lagos",
    "views": 100,
    "category_name": "Cars",
    "country": "Nigeria",
    "state": "Lagos",
    "lga": "Ikeja",
    "manufacturer": "Toyota",
    "model": "Camry",
    "trim": "LE",
    "colour": "Black",
    "condition": "Foreign Used",
    "transmission": "Automatic",
    "images": [ {
        id: '',
        user_id: '',
        product_id: '',
        image_url: '',
        face_image: 0,
        as_advert: 0,
        ...

    } ],
    "firstname": "John",
    "surname": "Doe",
    "phone": "...",
    "email": "...",
    "comments_count": 0
}
```

### User Object Structure
```json
{
    "id": 1,
    "firstname": "John",
    "surname": "Doe",
    "email": "john@example.com",
    "phone": "...",
    "passport": "...",
    "user_type_id": 1
}
```

---

## 7. Common Workflows

1.  **App Init**: Call `GET /api/data` to load all dropdown options (Makes, Models, States) and cache them.
2.  **Browsing**: Call `GET /api/active/1/20` for the feed.
3.  **Product Detail**: Call `GET /api/detail/{slug}`.
4.  **Selling**:
    -   User logs in (`POST /api/auth/login`).
    -   User fills form (using IDs from `/api/data`).
    -   User uploads images (converted to Base64).
    -   Submit to `POST /api/users/create`.
