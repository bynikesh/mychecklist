# Node.js Express React JSON API - Checklist Sharing Site

We'll be using:

- Mongo DB for our database
- mongoose for our database mappings.
- express.js for our JSON routes
- Mocha, Chai and SuperTest to test our routes

## Server Check List

- [ √] Create a server folder
  - [ √] Generate Express App
  - [√ ] initialize git repo
- [√ ] Create database
- [ √] Setup database connection Mongolab and MongoDb cluster
- [ √] Create List schema
- [√ ] Convert Express App to JSON API
  - [ √] Remove view rendering
  - [√ ] Remove routes folder
  - [ √] Remove static serve and public folder
  - [ √] Update error handler
- [ √] Add api folder and create/mount router
- [ √] Connect to the database'
  - [ √] Create database connection file
  
- [ ] List all records with GET /api/v1/lists
  - [√ ] Create query
  - [ √] Create route
- [ ] Setup tests
  - [ ] Install mocha, chai and supertest
  - [ ] Add a test database connection
  - [ ] Add npm test script
    - [ ] Drop/Create database
  - [ ] Create before
    - [ ] Run migrations/seeds on test db
- [ ] Make sure the tests are working!
- [√ ] List all records with GET /api/v1/lists
  - [ ] Add test
- [ √] Show one record with GET /api/v1/lists/:id
  - [ ] Validate id
  - [ ] Create query
  - [ ] Create route
  - [ ] Add test
- [√ ] Create a record with POST /api/v1/lists
  - [√ ] Create route
  - [ ] Validate sticker!
  - [ ] Create query
  - [ ] Add test
- [√ ] Update a record with PUT /api/v1/lists/:id
  - [√ ] Create route
  - [ ] Validate id
  - [ ] Validate updates
  - [ ] Create query
  - [ ] Add test
- [ √] Delete a record with DELETE /api/v1/lists/:id
  - [ √] Create route
  - [ ] Validate id
  - [ ] Create query
  - [ ] Add test

# Auth

Add form-based cookie authentication to our checklist app.

### We will have 3 types of users:

- Visitors - can only view the homepage
- Logged In User - can only view the their page
- Admin User - can view any page; can de-activate users;

## Authentication

- [ √] Add auth router
- [√ ] Create user with POST /auth/signup 
- [√ ] validate required fields 
- [ √] Check if email is unique - [ ] hash password with bcrypt - [ ] insert into db
      - [ √] Set a cookie with user_id after creating user
      - [ ] Cross origin cookie!
- [√ ] Create sign up form; show errors; redirect; \* [ √] Validate required fields
- [ √] Login user with POST /auth/login
      _ [ √] check if email in db
      _ [ √] compare password with hashed password in db \* [ √] set cookie
- [ √] Create login form; show errors; redirect; \* [ √ß] validate required fields

### Authorization:

- [ ] Visitors can only see the homepage
      _ [ ] create middleware to redirect visitors without a user_id cookie set
      _ [ ] redirect to sign up form and show an error message
- [ ] Logged in users can only see their page
      _ [ ] check user_id cookie in route handler
      _ [ ] show an unauthorized error message \* [ ] redirect to user page if they visit the homepage

## Admin Page:

- [ ] Admin page that lists all users
      _ [ ] admin table with user_id (unique constraint)
      _ [ ] de-activate users
- [ ] Admin can see any page on site

## Other things to do

- [ ] Redirect to Login page after the token expire
- [ ] send email after the user is registered
- [ ] after user login they must not access register and login link